<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Achievement;
use App\Http\Resources\AchievementResource;
use Illuminate\Support\Facades\Storage;

class AdminAchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $achievement = Achievement::query()
            ->select('title', 'slug', 'ranking', 'user_id', 'description', 'year', 'location', 'division', 'id')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Achievements/Index', [
            "achievements" => AchievementResource::collection($achievement),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Achievements/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $picture = $request->file('picture');
        $request->user()->achievements()->create([
            "title" => $title = $request->title,
            "slug" => $slug = str($title)->slug(),
            "link" => $request->link,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/achievements', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.achievements.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function show(Achievement $achievement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function edit(Achievement $achievement)
    {
        return inertia('Admin/Achievements/Edit', [
            "achie$achievement" => $achievement
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Achievement $achievement)
    {
        $picture = $request->file('picture');
        $achievement->update([
            "title" => $title = $request->title ? $request->title : $achievement->title,
            "slug" => str($title)->slug(),
            "link" => $request->link ? $request->link : $achievement->link,
            "description" => $request->description ? $request->description : $achievement->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $achievement->slug . '.' . $picture->extension()) : $achievement->picture
        ]);

        return to_route('admin.achievements.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Achievement $achievement)
    {
        if ($achievement->picture) {
            Storage::delete($achievement->picture);
        }

        $achievement->delete();
        return back();
    }
}

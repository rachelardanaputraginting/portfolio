<?php

namespace App\Http\Controllers;

use App\Http\Requests\AchievementRequest;
use App\Http\Resources\AchievementResource;
use App\Models\Achievement;
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
        $Achievements = Achievement::query()
            ->select('title', 'slug', 'picture', 'user_id', 'link', 'description', 'id')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Achievements/Index', [
            "Achievements" => AchievementResource::collection($Achievements),
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
    public function store(AchievementRequest $request)
    {
        $picture = $request->file('picture');
        $request->user()->achievements()->create([
            "title" => $title = $request->title,
            "slug" => $slug = str($title)->slug(),
            "link" => $request->link,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/Achievements', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.Achievements.index');
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
            "achievement" => $achievement
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function update(AchievementRequest $request, Achievement $achievement)
    {
        $picture = $request->file('picture');
        $achievement->update([
            "title" => $title = $request->title ? $request->title : $achievement->title,
            "slug" => str($title)->slug(),
            "link" => $request->link ? $request->link : $achievement->link,
            "description" => $request->description ? $request->description : $achievement->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $achievement->slug . '.' . $picture->extension()) : $achievement->picture
        ]);

        return to_route('admin.Achievements.index');
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

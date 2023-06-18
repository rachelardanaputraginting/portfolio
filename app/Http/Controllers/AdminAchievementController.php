<?php

namespace App\Http\Controllers;

use App\Http\Requests\AchievementRequest;
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
    public function store(AchievementRequest $request)
    {
        $request->user()->achievements()->create([
            "title" => $title = $request->title,
            "slug" => $slug = str($title)->slug(),
            "ranking" => $request->ranking,
            "year" => $request->year,
            "location" => $request->location,
            "division" => $request->division,
            "description" => $request->description,
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
            "ranking" => $request->ranking ? $request->ranking : $achievement->ranking,
            "year" => $request->year ? $request->year : $achievement->year,
            "location" => $request->location ? $request->location : $achievement->location,
            "division" => $request->division ? $request->division : $achievement->division,
            "description" => $request->description ? $request->description : $achievement->description
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

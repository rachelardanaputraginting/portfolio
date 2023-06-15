<?php

namespace App\Http\Controllers;

use App\Http\Requests\skillRequest;
use App\Models\Skill;
use App\Http\Resources\skillResource;
use Illuminate\Support\Facades\Storage;

class AdminskillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $skills = Skill::query()
            ->select('id', 'title', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Skill/Index', [
            "skills" => SkillResource::collection($skills),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Skill/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SkillRequest $request)
    {
        $request->user()->skills()->create([
            "title" => $title = $request->title,
            "slug" => str($title)->slug(),
            "level" => $request->level,
            "icon" => $request->icon,
            "description" => $request->description
        ]);

        return to_route('admin.skills.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function edit(Skill $skill)
    {
        return inertia('Admin/Skill/Edit', [
            "skill" => $skill
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function update(SkillRequest $request, Skill $skill)
    {
        // dd($request->all());
        $skill->update([
            "title" => $title = $request->title ? $request->title : $skill->title,
            "slug" => str($title)->slug(),
            "level" => $request->level,
            "icon" => $request->icon ? $request->icon : $skill->icon,
            "description" => $request->description ? $request->description : $skill->description
        ]);

        return to_route('admin.skills.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Skill $skill)
    {
        if ($skill->picture) {
            Storage::delete($skill->picture);
        }

        $skill->delete();
        return back();
    }
}

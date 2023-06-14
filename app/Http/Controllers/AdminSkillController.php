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
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/skills/Index', [
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
        return inertia('Admin/Skills/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SkillRequest $request)
    {
        $picture = $request->file('picture');
        $request->user()->skills()->create([
            "name" => $name = $request->name,
            "slug" => $slug = str($name)->slug(),
            "department" => $request->department,
            "year" => $request->year,
            "location" => $request->location,
            "status" => $request->status,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/skills', $slug . '.' . $picture->extension()) : null
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
        return inertia('Admin/skills/Edit', [
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
        $picture = $request->file('picture');
        $skill->update([
            "name" => $name = $request->name ? $request->name : $skill->name,
            "slug" => str($name)->slug(),
            "department" => $request->department ? $request->department : $skill->department,
            "year" => $request->year ? $request->year : $skill->year,
            "location" => $request->location ? $request->location : $skill->location,
            "status" => $request->status ? $request->status : $skill->status,
            "description" => $request->description ? $request->description : $skill->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $skill->slug . '.' . $picture->extension()) : $skill->picture
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

<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(Request $request)
    {
        $search_hard = $request->input('q');
        if ($search_hard) {
            $hard_skills = Skill::query()
            ->where('category', 'hard')->where('title', 'LIKE', "%$search_hard%")
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();
        } else {
            $hard_skills = Skill::query()
            ->where('category', 'hard')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();
        }

        $search_soft = $request->input('r');
        if ($search_soft) {
            $soft_skills = Skill::query()
            ->where('category', 'soft')->where('title', 'LIKE', "%$search_soft%")
            ->select('id', 'title','category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();
        } else {
            $soft_skills = Skill::query()
            ->where('category', 'soft')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();
        }

        // return SkillResource::collection($hard_skills);
        return inertia('Skill/Index', [
            "hard_skills" => SkillResource::collection($hard_skills),
            "soft_skills" => SkillResource::collection($soft_skills),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Skill $skill)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Skill $skill)
    {
        //
    }
}

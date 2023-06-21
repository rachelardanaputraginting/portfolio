<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
            $hard_skills = Skill::query()
            ->where('category', 'hard')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();

            $soft_skills = Skill::query()
            ->where('category', 'soft')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();

        // return SkillResource::collection($hard_skills);
        return inertia('Skill/Index', [
            "hard_skills" => SkillResource::collection($hard_skills),
            "soft_skills" => SkillResource::collection($soft_skills),
        ]);
    }

    public function hardall(Request $request)
    {
        $search_hard = $request->input('query');
        if ($search_hard) {
            $hard_skills = Skill::query()
            ->where('category', 'hard')->where('title', 'LIKE', "%$search_hard%")
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        } else {
            $hard_skills = Skill::query()
            ->where('category', 'hard')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        }

        $count_hard_skill = Skill::where('category', 'hard')->count();

        // return SkillResource::collection($hard_skills);
        return inertia('Skill/HardAll', [
            "hard_skills" => SkillResource::collection($hard_skills),
            "count_hard_skill" => $count_hard_skill,
        ]);
    }

    public function softall(Request $request)
    {
        $search_soft = $request->input('query');
        if ($search_soft) {
            $soft_skills = Skill::query()
            ->where('category', 'soft')->where('title', 'LIKE', "%$search_soft%")
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        } else {
            $soft_skills = Skill::query()
            ->where('category', 'soft')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        }

        $count_soft_skill = Skill::where('category', 'soft')->count();

        return inertia('Skill/SoftAll', [
            "soft_skills" => SkillResource::collection($soft_skills),
            "count_soft_skill" => $count_soft_skill,
        ]);
    }
}

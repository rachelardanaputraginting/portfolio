<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hard_skills = Experience::query()
            ->where('category', 'hard')
            ->select('id', 'title', 'category', 'slug', 'icon', 'level', 'description')
            ->latest()
            ->get();
        return inertia('Experiences/Index', [
            "experiences" => $experiences,
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
     * @param  \App\Models\Experience  $experiences
     * @return \Illuminate\Http\Response
     */
    public function show(Experience $experiences)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Experience  $experiences
     * @return \Illuminate\Http\Response
     */
    public function edit(Experience $experiences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Experience  $experiences
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Experience $experiences)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Experience  $experiences
     * @return \Illuminate\Http\Response
     */
    public function destroy(Experience $experiences)
    {
        //
    }
}

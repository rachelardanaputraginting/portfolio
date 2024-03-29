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
        $work_experiences = Experience::query()
            ->where('category', 'work')
            ->select('id', 'name', 'position', 'entry_year', 'out_year', 'description', 'location', 'status', 'picture')
            ->latest()
            ->get();

        $activity_experiences = Experience::query()
            ->where('category', 'activity')
            ->select('id', 'name', 'position', 'entry_year', 'out_year', 'description', 'location', 'status', 'picture')
            ->latest()
            ->get();

        return inertia('Experiences/Index', [
            "work_experiences" => $work_experiences,
            "activity_experiences" => $activity_experiences,
        ]);
    }

    public function work_all(Request $request)
    {
        $search_work = $request->input('query');
        if ($search_work) {
            $work_experiences = Experience::query()
                ->where('category', 'work')->where('name', 'LIKE', "%$search_work%")
                ->select('id', 'name', 'position', 'entry_year', 'out_year', 'description', 'location', 'status', 'picture')
                ->latest()
                ->get();
        } else {
            $work_experiences = Experience::query()
                ->where('category', 'work')
                ->select('id', 'name', 'position', 'entry_year', 'out_year', 'description', 'location', 'status', 'picture')
                ->latest()
                ->get();
        }

        return inertia('Experiences/WorkAll', [
            "work_experiences" => $work_experiences,
        ]);
    }

    public function activity_all(Request $request)
    {
        $search_activity = $request->input('query');
        if ($search_activity) {
            $activity_experiences = Experience::query()
                ->where('category', 'activity')->where('name', 'LIKE', "%$search_activity%")
                ->select('id', 'name', 'position', 'entry_year', 'out_year', 'description', 'location', 'status', 'picture')
                ->latest()
                ->get();
        } else {
            $activity_experiences = Experience::query()
                ->where('category', 'activity')
                ->select('id', 'name', 'position', 'entry_year', 'out_year', 'description', 'location', 'status', 'picture')
                ->latest()
                ->get();
        }


        return inertia('Experiences/ActivityAll', [
            "activity_experiences" => $activity_experiences,
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

<?php

namespace App\Http\Controllers;

use App\Http\Requests\EducationRequest;
use App\Models\Experience;
use App\Http\Resources\ExperienceResource;
use Illuminate\Support\Facades\Storage;

class AdminExperiencesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $educations = Experience::query()
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Experiences/Index', [
            "educations" => ExperienceResource::collection($educations),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Experiences/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EducationRequest $request)
    {
        $picture = $request->file('picture');
        $request->user()->educations()->create([
            "name" => $name = $request->name,
            "slug" => $slug = str($name)->slug(),
            "department" => $request->department,
            "year" => $request->year,
            "location" => $request->location,
            "status" => $request->status,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/educations', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.educations.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Experience  $education
     * @return \Illuminate\Http\Response
     */
    public function show(Experience $education)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Experience  $education
     * @return \Illuminate\Http\Response
     */
    public function edit(Experience $education)
    {
        return inertia('Admin/Experiences/Edit', [
            "education" => $education
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Experience  $education
     * @return \Illuminate\Http\Response
     */
    public function update(EducationRequest $request, Experience $education)
    {
        $picture = $request->file('picture');
        $education->update([
            "name" => $name = $request->name ? $request->name : $education->name,
            "slug" => str($name)->slug(),
            "department" => $request->department ? $request->department : $education->department,
            "year" => $request->year ? $request->year : $education->year,
            "location" => $request->location ? $request->location : $education->location,
            "status" => $request->status ? $request->status : $education->status,
            "description" => $request->description ? $request->description : $education->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $education->slug . '.' . $picture->extension()) : $education->picture
        ]);

        return to_route('admin.educations.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Experience  $education
     * @return \Illuminate\Http\Response
     */
    public function destroy(Experience $education)
    {
        if ($education->picture) {
            Storage::delete($education->picture);
        }

        $education->delete();
        return back();
    }
}

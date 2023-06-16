<?php

namespace App\Http\Controllers;

use App\Http\Requests\EducationRequest;
use App\Http\Requests\ExperienceRequest;
use App\Models\Experience;
use App\Http\Resources\ExperienceResource;
use Illuminate\Support\Facades\Storage;

class AdminExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $experiences = Experience::query()
            ->select('id', 'name', 'slug', 'picture', 'position', 'entry_year', 'out_year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Experiences/Index', [
            "experiences" => ExperienceResource::collection($experiences),
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
    public function store(ExperienceRequest $request)
    {
        $picture = $request->file('picture');
        $request->user()->experiences()->create([
            "name" => $name = $request->name,
            "slug" => $slug = str($name)->slug(),
            "position" => $request->position,
            "entry_year" => $request->entry_year,
            "out_year" => $request->out_year,
            "location" => $request->location,
            "status" => $request->status,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/experiences', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.experiences.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function show(Experience $experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function edit(Experience $experience)
    {
        return inertia('Admin/Experiences/Edit', [
            "experience" => $experience
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function update(ExperienceRequest $request, Experience $experience)
    {
        $picture = $request->file('picture');
        $experience->update([
            "name" => $name = $request->name ? $request->name : $experience->name,
            "slug" => str($name)->slug(),
            "position" => $request->position ? $request->position : $experience->position,
            "entry_year" => $request->entry_year ? $request->entry_year : $experience->entry_year,
            "out_year" => $request->out_year ? $request->out_year : $experience->out_year,
            "location" => $request->location ? $request->location : $experience->location,
            "status" => $request->status ? $request->status : $experience->status,
            "description" => $request->description ? $request->description : $experience->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $experience->slug . '.' . $picture->extension()) : $experience->picture
        ]);

        return to_route('admin.experiences.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function destroy(Experience $experience)
    {
        if ($experience->picture) {
            Storage::delete($experience->picture);
        }

        $experience->delete();
        return back();
    }
}

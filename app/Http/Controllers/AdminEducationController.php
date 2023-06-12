<?php

namespace App\Http\Controllers;

use App\Http\Requests\EducationRequest;
use App\Models\Education;
use App\Http\Resources\EducationResource;
use Illuminate\Support\Facades\Storage;

class AdminEducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Educations = Education::query()
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Educations/Index', [
            "educations" => EducationResource::collection($Educations),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Educations/Create');
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
        $request->user()->Educations()->create([
            "title" => $title = $request->title,
            "slug" => $slug = str($title)->slug(),
            "link" => $request->link,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/Educations', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.Educations.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Education  $Education
     * @return \Illuminate\Http\Response
     */
    public function show(Education $Education)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Education  $Education
     * @return \Illuminate\Http\Response
     */
    public function edit(Education $Education)
    {
        return inertia('Admin/Educations/Edit', [
            "Education" => $Education
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Education  $Education
     * @return \Illuminate\Http\Response
     */
    public function update(EducationRequest $request, Education $Education)
    {
        $picture = $request->file('picture');
        $Education->update([
            "title" => $title = $request->title ? $request->title : $Education->title,
            "slug" => str($title)->slug(),
            "link" => $request->link ? $request->link : $Education->link,
            "description" => $request->description ? $request->description : $Education->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $Education->slug . '.' . $picture->extension()) : $Education->picture
        ]);

        return to_route('admin.Educations.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Education  $Education
     * @return \Illuminate\Http\Response
     */
    public function destroy(Education $Education)
    {
        if ($Education->picture) {
            Storage::delete($Education->picture);
        }

        $Education->delete();
        return back();
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\EducationResource;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formal_educations = Education::query()
            ->where('category', 'formal')
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->get();

        $informal_educations = Education::query()
            ->where('category', 'informal')
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->get();

            // return EducationResource::collection($formal_educations);

        return inertia('Educations/Index', [
            "formal_educations" => EducationResource::collection($formal_educations),
            "informal_educations" => EducationResource::collection($informal_educations),
        ]);
    }

    public function formalall(Request $request)
    {
        $search_formal = $request->input('query');
        if ($search_formal) {
            $formal_educations = Education::query()
            ->where('category', 'formal')->where('name', 'LIKE', "%$search_formal%")
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        } else {
            $formal_educations = Education::query()
            ->where('category', 'formal')
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        }

        $count_formal_education = Education::where('category', 'formal')->count();

        return inertia('Educations/FormalAll', [
            "formal_educations" => EducationResource::collection($formal_educations),
            "count_formal_education" => $count_formal_education,
        ]);
    }

    public function informalall(Request $request)
    {
        $search_informal = $request->input('query');
        if ($search_informal) {
            $informal_educations = Education::query()
            ->where('category', 'informal')->where('name', 'LIKE', "%$search_informal%")
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        } else {
            $informal_educations = Education::query()
            ->where('category', 'informal')
            ->select('id', 'name', 'slug', 'picture', 'department', 'year', 'location', 'status', 'description')
            ->latest()
            ->fastPaginate(4)->withQueryString();
        }

        $count_informal_education = Education::where('category', 'formal')->count();

        return inertia('Educations/InformalAll', [
            "informal_educations" => EducationResource::collection($informal_educations),
            "count_informal_education" => $count_informal_education,
        ]);
    }


}

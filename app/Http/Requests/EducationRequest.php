<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EducationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "picture" => ['nullable', 'mimes:png,jpg, jpeg', 'image'],
            "name" => ['required', 'string', 'min:3'],
            "department" => ['required', 'string', 'min:3'],
            "year" => ['required', 'min:3'],
            "location" => ['required', 'string', 'min:3'],
            "status" => ['required', 'string', 'min:3'],
            "description" => ['required', 'string', 'min:3'],
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AchievementRequest extends FormRequest
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
            "title" => ['required', 'string', 'min:3'],
            "ranking" => ['numeric', 'required', 'string', 'min:3'],
            "year" => ['required', 'min:3'],
            "location" => ['required', 'string', 'min:3'],
            "division" => ['required', 'string', 'min:3'],
            "description" => ['required', 'string', 'min:3'],
        ];
    }
}

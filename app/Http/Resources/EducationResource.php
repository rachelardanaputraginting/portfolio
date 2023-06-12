<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EducationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $name =  $this->name,
            "slug" => Str::slug($name),
            "department" => $this->department,
            "status" => $this->status,
            "year" => $this->year,
            "location" => $this->location,
            "description" => Str::limit($this->description, 50, '...'),
            "picture" => $this->picture ? Storage::url($this->picture) : 'https://flowbite.com/docs/images/blog/image-1.jpg',

        ];
    }
}

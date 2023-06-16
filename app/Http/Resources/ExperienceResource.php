<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ExperienceResource extends JsonResource
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
            "position" => $this->position,
            "entry_year" => $this->entry_year,
            "out_year" => $this->out_year,
            "location" => $this->location,
            "status" => $this->status,
            "description" => $this->description,
            "picture" => $this->picture ? Storage::url($this->picture) : 'https://flowbite.com/docs/images/blog/image-1.jpg',
        ];
    }
}

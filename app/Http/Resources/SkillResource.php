<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SkillResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if ($this->level === 1) {
            $level = "Beginner";
            $color = "bg-red-600";
        }elseif ($this->level === 2) {
            $level = "Intermediate";
            $color = "bg-blue-600";
        }elseif($this->level === 3) {
            $level = "Advanced";
            $color = "bg-green-600";
        }
        return [
            "id" => $this->id,
            "title" => $title =  $this->title,
            "slug" => Str::slug($title),
            "category" => $this->category,
            "level" => [
                "id" => $this->level,
                "name" => $level,
                "color" => $color
            ],
            "icon" => $this->icon,
            "description" => $this->description
        ];
    }
}

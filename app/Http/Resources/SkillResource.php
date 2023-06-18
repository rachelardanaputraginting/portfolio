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
        if ($this->level == 1) {
            $level = "Beginner";
        }elseif ($this->level == 2) {
            $level = "Intermediate";
        }else {
            $level = "Advanced";
        }
        return [
            "id" => $this->id,
            "title" => $title =  $this->title,
            "slug" => Str::slug($title),
            "level" => [
                "id" => $this->level,
                "name" => $level
            ],
            "icon" => $this->icon,
            "description" => $this->description
        ];
    }
}

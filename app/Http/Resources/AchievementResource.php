<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class AchievementResource extends JsonResource
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
            "title" => $title =  $this->title,
            "slug" => Str::slug($title),
            "ranking" => $this->ranking,
            "year" => $this->year,
            "location" => $this->location,
            "division" => $this->division,
            "description" => $this->description
        ];
    }
}

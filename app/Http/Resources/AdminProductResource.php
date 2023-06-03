<?php

namespace App\Http\Resources;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdminProductResource extends JsonResource
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
            "user_id" => $this->user_id,
            "title" => $title =  $this->title,
            "slug" => Str::slug($title),
            "link" => $this->link,
            "status" => str($this->status)->ucfirst(),
            "description" => Str::limit($this->description, 50, '...'),
            "picture" => $this->picture ? Storage::url($this->picture) : 'https://flowbite.com/docs/images/blog/image-1.jpg',

        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::query()
            ->select('title', 'slug', 'picture', 'user_id', 'link', 'description', 'id')
            ->latest()
            ->limit(4)
            ->get();
        return inertia('Products/Index', [
            "products" => ProductResource::collection($products),
        ]);
    }

    public function all() {
        $products = Product::query()
            ->select('title', 'slug', 'picture', 'user_id', 'link', 'description', 'id')
            ->latest()
            ->get();
        return inertia('Products/Index', [
            "products" => ProductResource::collection($products),
        ]);
    }
}

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
            ->get();
        return inertia('Products/Index', [
            "products" => ProductResource::collection($products),
        ]);
    }

    public function all() {
        $products = Product::query()
            ->select('title', 'slug', 'picture', 'user_id', 'link', 'description', 'id')
            ->latest()
            ->fastPaginate(3);

        $count_product = Product::count();
        return inertia('Products/All', [
            "products" => ProductResource::collection($products),
            "count_product" => $count_product,
        ]);
    }
}

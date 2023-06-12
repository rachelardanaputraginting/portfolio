<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::query()
            ->select('title', 'slug', 'picture', 'user_id', 'created_at', 'link', 'description', 'id')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Products/Index', [
            "products" => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $picture = $request->file('picture');
        $request->user()->products()->create([
            "title" => $title = $request->title,
            "slug" => $slug = str($title)->slug(),
            "link" => $request->link,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return inertia('Admin/Products/Edit', [
            "product" => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {
        $picture = $request->file('picture');
        $product->update([
            "title" => $title = $request->title ? $request->title : $product->title,
            "slug" => str($title)->slug(),
            "link" => $request->link ? $request->link : $product->link,
            "description" => $request->description ? $request->description : $product->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $product->slug . '.' . $picture->extension()) : $product->picture
        ]);

        return to_route('admin.products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return back();
    }
}

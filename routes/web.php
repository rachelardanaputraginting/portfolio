<?php

use App\Http\Controllers\AchievementController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperiencesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::resource('products', ProductController::class);
Route::resource('skills', SkillController::class);
Route::resource('achievements', AchievementController::class);
Route::resource('educations', EducationController::class);
Route::resource('experiences', ExperiencesController::class);


Route::middleware('auth')->group(function () {

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Products
    Route::controller(AdminProductController::class)->group(function () {
        Route::get('/admin/products', 'index')->name('admin.products.index');
        Route::get('/admin/products/create', 'create')->name('admin.products.create');
        Route::delete('/admin/products/{product:slug}', 'destroy')->name('admin.products.destroy');
        Route::post('/admin/products', 'store')->name('admin.products.store');
        Route::get('/admin/products/{product:slug}/edit', 'edit')->name('admin.products.edit');
        Route::put('/admin/products/{product}', 'update')->name('admin.products.update');
    });
});

require __DIR__ . '/auth.php';

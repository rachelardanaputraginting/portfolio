<?php

use App\Http\Controllers\AchievementController;
use App\Http\Controllers\AdminProductController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
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

    // // Educations
    // Route::controller(AdminEducationController::class)->group(function () {
    //     Route::get('admin/educations', 'index')->name('admin.educations.index');
    //     Route::get('admin/educations/create', 'create')->name('admin.educations.create');
    //     Route::delete('admin/educations/{product:slug}', 'destroy')->name('admin.educations.destroy');
    //     Route::post('admin/educations', 'store')->name('admin.educations.store');
    //     Route::get('admin/educations/{product:slug}/edit', 'edit')->name('admin.educations.edit');
    //     Route::put('admin/educations/{product:slug}', 'update')->name('admin.educations.update');
    // });

    // Route::resource('admin/skills', AdminSkillController::class);
    // Route::resource('admin/educations', AdminEducationController::class);
    // Route::resource('admin/achievements', AdminAchievementController::class);
    // Route::resource('admin/products', AdminProductController::class);
});

require __DIR__ . '/auth.php';

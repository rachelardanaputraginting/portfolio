<?php

use App\Http\Controllers\AchievementController;
use App\Http\Controllers\Admin\AchievementController as AdminAchievementController;
use App\Http\Controllers\Admin\EducationController as AdminEducationController;
use App\Http\Controllers\Admin\ExperiencesController as AdminExperiencesController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\SkillController as AdminSkillController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperiencesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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

    Route::get('admin/products', [AdminProductController::class, 'index'])->name('admin.products.index');
    Route::get('admin/products/create', [AdminProductController::class, 'create'])->name('admin.products.create');
    Route::delete('admin/products/{product:slug}', [AdminProductController::class, 'destroy'])->name('admin.products.destroy');
    Route::post('admin/products', [AdminProductController::class, 'store'])->name('admin.products.store');
    Route::get('admin/products/{product:slug}/edit', [AdminProductController::class, 'edit'])->name('admin.products.edit');
    Route::put('admin/products/{product:slug}', [AdminProductController::class, 'update'])->name('admin.products.update');

    Route::resource('admin/skills', AdminSkillController::class);
    Route::resource('admin/educations', AdminEducationController::class);
    Route::resource('admin/achievements', AdminAchievementController::class);
    Route::resource('admin/experiences', AdminExperiencesController::class);
});

require __DIR__ . '/auth.php';

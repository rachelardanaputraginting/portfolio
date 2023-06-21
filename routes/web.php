<?php

use App\Http\Controllers\AchievementController;
use App\Http\Controllers\AdminEducationController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminExperienceController;
use App\Http\Controllers\AdminAchievementController;
use App\Http\Controllers\AdminSkillController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/all', [ProductController::class, 'all'])->name('products.all');
Route::get('/skills', [SkillController::class, 'index'])->name('skills.index');
Route::get('/skills/hard_skills', [SkillController::class, 'hardall'])->name('skills.hardall');
Route::get('/skills/soft_skills', [SkillController::class, 'softall'])->name('skills.softall');
Route::resource('skills', SkillController::class);
Route::resource('achievements', AchievementController::class);
Route::get('/educations', [EducationController::class, 'index'])->name('educations.index');
Route::get('/educations/formal_educations', [EducationController::class, 'formalall'])->name('educations.formalall');
Route::get('/educations/informal_educations', [EducationController::class, 'informalall'])->name('educations.informalall');
Route::resource('experiences', ExperienceController::class);


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
        Route::put('/admin/products/{product:slug}', 'update')->name('admin.products.update');
    });

    // Educations
    Route::controller(AdminEducationController::class)->group(function () {
        Route::get('/admin/educations', 'index')->name('admin.educations.index');
        Route::get('/admin/educations/create', 'create')->name('admin.educations.create');
        Route::delete('/admin/educations/{education:slug}', 'destroy')->name('admin.educations.destroy');
        Route::post('/admin/educations', 'store')->name('admin.educations.store');
        Route::get('/admin/educations/{education:slug}/edit', 'edit')->name('admin.educations.edit');
        Route::put('/admin/educations/{education:slug}', 'update')->name('admin.educations.update');
    });

    // Skills
    Route::controller(AdminSkillController::class)->group(function () {
        Route::get('/admin/skills', 'index')->name('admin.skills.index');
        Route::get('/admin/skills/create', 'create')->name('admin.skills.create');
        Route::delete('/admin/skills/{skill:slug}', 'destroy')->name('admin.skills.destroy');
        Route::post('/admin/skills', 'store')->name('admin.skills.store');
        Route::get('/admin/skills/{skill:slug}/edit', 'edit')->name('admin.skills.edit');
        Route::put('/admin/skills/{skill:slug}', 'update')->name('admin.skills.update');
    });

    // Experiences
    Route::controller(AdminExperienceController::class)->group(function () {
        Route::get('/admin/experiences', 'index')->name('admin.experiences.index');
        Route::get('/admin/experiences/create', 'create')->name('admin.experiences.create');
        Route::delete('/admin/experiences/{experience:slug}', 'destroy')->name('admin.experiences.destroy');
        Route::post('/admin/experiences', 'store')->name('admin.experiences.store');
        Route::get('/admin/experiences/{experience:slug}/edit', 'edit')->name('admin.experiences.edit');
        Route::put('/admin/experiences/{experience:slug}', 'update')->name('admin.experiences.update');
    });

    // Experiences
    Route::controller(AdminAchievementController::class)->group(function () {
        Route::get('/admin/achievements', 'index')->name('admin.achievements.index');
        Route::get('/admin/achievements/create', 'create')->name('admin.achievements.create');
        Route::delete('/admin/achievements/{achievement:slug}', 'destroy')->name('admin.achievements.destroy');
        Route::post('/admin/achievements', 'store')->name('admin.achievements.store');
        Route::get('/admin/achievements/{achievement:slug}/edit', 'edit')->name('admin.achievements.edit');
        Route::put('/admin/achievements/{achievement:slug}', 'update')->name('admin.achievements.update');
    });

});

require __DIR__ . '/auth.php';

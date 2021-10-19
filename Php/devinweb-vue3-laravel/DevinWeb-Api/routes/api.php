<?php

use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\SchoolController;
use App\Http\Controllers\Api\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['api', /*'checkAuth'*/]], function () {
    Route::group(['prefix' => 'schools'], function () {
        Route::post('{school_id}/login', [LoginController::class, 'login'])->name('login');
        Route::post('{school_id}/register', [StudentController::class, 'store'])->name('register');
        Route::post('{school_id}/courses/{course_id}', [CourseController::class, 'enroll'])->name('enroll');
        Route::post('{school_id}/courses', [CourseController::class, 'index'])->name('courses');
    });
});

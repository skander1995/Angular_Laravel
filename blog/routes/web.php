<?php

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
Route::get('/', 'PagesController@index');
Route::get('/about', 'PagesController@about');
Route::get('/services', 'PagesController@services');

//make all routes for Postcontroller 
//Route::resource('posts','PostController');
Route::get('posts/create', 'PostsController@create')->name('posts.create');
Route::post('posts/store', 'PostsController@store')->name('posts.store');

Route::get('posts', 'PostsController@index')->name('posts.index');
Route::get('posts/{id}', 'PostsController@show')->name('posts.show');

Route::get('posts/approve/{id}', 'PostsController@update')->name('posts.update');

Route::get('posts/delete/{id}', 'PostsController@destroy')->name('posts.delete');



Route::get('articles/create', 'PostsController@create')->name('posts.create');
Route::post('articles/store', 'PostsController@store')->name('posts.store');

Route::get('articles', 'PostsController@index')->name('posts.index');
Route::get('articles/{id}', 'PostsController@show')->name('posts.show');

Route::get('articles/update/', 'PostsController@update')->name('posts.update');
Route::get('articles/delete/{id}', 'PostsController@destroy')->name('posts.delete');
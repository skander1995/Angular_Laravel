<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//-------------posts Curd----
Route::get('posts/create', 'PostsController@create')->name('posts.create');
Route::middleware('api', 'auth:api')->post('posts/store', 'PostsController@store')->name('posts.store');
Route::middleware('api', 'auth:api')->get('posts', 'PostsController@index')->name('posts.index');
Route::get('posts/{id}', 'PostsController@show')->name('posts.show');
Route::get('posts/approve/{id}', 'PostsController@approve')->name('posts.update');
Route::get('posts/disapprove/{id}', 'PostsController@disapprove')->name('posts.disapprove');
Route::get('posts/delete/{id}', 'PostsController@destroy')->name('posts.delete');


Route::get('articles/create', 'ArticleController@create')->name('posts.create');
Route::post('articles/store', 'ArticleController@store')->name('posts.store');
Route::get('articles', 'ArticleController@index')->name('posts.index');
Route::get('articles/{id}', 'ArticleController@show')->name('posts.show');

Route::get('articles/update/', 'ArticleController@update')->name('posts.update');
Route::get('articles/delete/{id}', 'ArticleController@destroy')->name('posts.delete');
// ------------auth
Route::post('/register','APi\PassportAuthController@register');
Route::post('/login','APi\PassportAuthController@login');
Route::middleware('api', 'auth:api')->get('/users','APi\PassportAuthController@index');
Route::get('/users/activate/{id}','APi\PassportAuthController@activate');




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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/rooms/{id}', 'RoomController@room');

Route::resource('rooms','RoomController')->except(['create', 'destroy']);

Route::resource('whoiswho','WhoController')->except(['create', 'destroy']);

Route::resource('hometext','HomeTextController')->except(['create', 'destroy']);

Route::resource('exittext','ExitTextController')->except(['create', 'destroy']);
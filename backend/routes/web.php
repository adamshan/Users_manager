<?php

use Illuminate\Support\Facades\Route;

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



//toutes les routes qui se charge des nos users
            route::group(['prefix'=>'user'],function(){

            Route::get('/tableauDeUsers', 'UserController@getUtilisateur');
            Route::get('/tableauDeUsers/{status}', 'UserController@getListUtilisateur');
            
        Route::get('/connection/{login}/{password}','UserController@connection');
        Route::post('/add', 'UserController@ajoutUtilisateur');
        Route::post('/delete','UserController@supprimeUtilisateur');
        Route::get('/estAdmin/{id}','UserController@estAdmin');
        Route::get('/estUser/{id}','UserController@estUtilisateur');
        Route::post('/updateclass="form-group"','UserController@modifUtilisateur');
        

});

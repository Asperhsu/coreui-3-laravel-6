<?php

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/', 'HomeController@index')->name('index');
});

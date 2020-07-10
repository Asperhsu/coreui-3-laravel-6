<?php
namespace Admin\Providers;

use Illuminate\Support\ServiceProvider;

class AdminServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadTranslationsFrom(__DIR__  . '/../resources/lang', 'admin');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'admin');
    }

    public function register()
    {
        $this->app->register(RouteServiceProvider::class);

        $this->mergeConfigFrom(__DIR__ . '/../config/config.php', 'admin');
    }
}

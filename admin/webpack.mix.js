const mix = require('laravel-mix');

let publicPath = '../public/admin';
mix.setPublicPath(publicPath);
mix.setResourceRoot('/admin');

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');


/** coreui */
mix.sass('resources/sass/style.scss', 'css');
mix.copy('node_modules/@coreui/utils/dist/coreui-utils.js', publicPath + '/js');
mix.copy('node_modules/@coreui/coreui/dist/js/coreui.bundle.min.js', publicPath + '/js');
mix.copy('node_modules/@coreui/icons/js/svgxuse.min.js', publicPath + '/js');
//fonts
mix.copy('node_modules/@coreui/icons/fonts', publicPath + '/fonts');
//icons
mix.copy('node_modules/@coreui/icons/sprites/free.svg', publicPath + '/icons/sprites');
// images
mix.copy('resources/assets', publicPath + '/assets');

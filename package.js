
Package.describe({
    summary: "Owl Carousel for Meteor. Touch enabled jQuery plugin that lets you create beautiful responsive carousel slider."
});

Package.on_use(function (api, where) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/grabbing.png',
        'lib/AjaxLoader.gif',
        'lib/owl.carousel.css',
        'lib/owl.theme.css',
        'lib/owl.carousel.js'
        // 'lib/owl.carousel.min.js'
        ], 'client');

});
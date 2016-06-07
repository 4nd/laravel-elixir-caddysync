var gulp = require('gulp');
var shell = require('gulp-shell');
var _ = require('underscore');
var gutils = require('gulp-util');
var Elixir = require('laravel-elixir')
var portFinder = require('portfinder');
var Task = Elixir.Task;

Elixir.extend('caddySync', function() {

    portFinder.basePort =  50000;

    var caddyCmd = 'caddy';

    // Browsersync will only run during `gulp watch`.
    if (gutils.env._.indexOf('watch') > -1) {
        portFinder.getPort(function(err, port){
            if(err != 'null') {
                Elixir.Log.message('Free port found: ' + port)
                gulp.src('').pipe(shell(caddyCmd + ' -port ' + port));
                Elixir.mixins.browserSync({ proxy: '127.0.0.1:'+port});
            } else {
                Elixir.Log.heading('Failed to find free port above ' + portFinder.basePort)
            }
        })
    }
    new Task('caddySync', function() { }).watch();

});

var gulp = require('gulp');
var shell = require('gulp-shell');
var _ = require('underscore');
var gutils = require('gulp-util');
var Elixir = require('laravel-elixir')
var portFinder = require('portfinder');
var Task = Elixir.Task;

Elixir.extend('caddySync', function(options) {

    var _options = _.extend({},{
        caddypath: 'caddy',
        basePort: 50000,
        bindTo: '127.0.0.1'
    },options);

    portFinder.basePort = _options.basePort;

    var caddyCmd = _options.caddypath;

    // Browsersync will only run during `gulp watch`.
    if (gutils.env._.indexOf('watch') > -1) {
        portFinder.getPort(function(err, port){
            if(!err) {
                gulp.src('').pipe(shell(caddyCmd + ' -port ' + port));
                Elixir.mixins.browserSync({ proxy: _options.bindTo+':'+port});
            } else {
                Elixir.Log.heading('Failed to find free port above ' + _options.basePort)
            }
        })
    }
    new Task('caddySync', function() { }).watch();

});

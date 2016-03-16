"use strict";

module.exports = {

    grunt: {
        options: {
            reload: true
        },
        files: [
            'Gruntfile.js',
            'grunt/*.js'
        ],
        tasks: ['jshint:grunt']
    },
    js: {
        files: [ '<%= build.src %>/scripts/**/*.js' ],
        tasks: [ 'jshint:js', 'browserify:dev' ],
    },
    index: {
        files: [ '<%= build.src %>/index.html' ],
        tasks: [ 'copy:dev' ]
    },
    templates: {
        files: [ '<%= build.src %>/templates/**/*.html' ],
        tasks: [ 'ngtemplates:dev' ]
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [ '<%= build.dev.dir %>/**/*' ]
    }

};

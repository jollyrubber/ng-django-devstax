"use strict";

module.exports = {

    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    grunt: [
        'Gruntfile.js',
        'grunt/*.js'
    ],
    js: [
        '<%= build.src %>/scripts/**/*.js'
    ]

};

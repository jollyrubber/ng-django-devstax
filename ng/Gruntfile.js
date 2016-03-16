"use strict";

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            pkg: grunt.file.readJSON('package.json'),
            build: {
                src: 'app',
                dist: {
                    dir: 'dist',
                    apiBaseUrl: 'ng_django_project'
                },
                dev: {
                    dir: 'dev',
                    apiBaseUrl: 'http://localhost:8000/ng_django_project'
                }
            }
        }
    });

};

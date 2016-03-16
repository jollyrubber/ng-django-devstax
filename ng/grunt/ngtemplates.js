"use strict";

module.exports = {

    options: {
        module: "ng-django-app",
        htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
    },

    dev: {
        cwd: "<%= build.src %>/templates",
        src: "**/*.html",
        dest: "<%= build.dev.dir %>/scripts/templates.js"
    },

    dist: {
        cwd: "<%= build.src %>/templates",
        src: "**/*.html",
        dest: "<%= build.dist.dir %>/scripts/templates.js"
    }

};

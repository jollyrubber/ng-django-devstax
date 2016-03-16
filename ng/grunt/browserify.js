"use strict";

module.exports = {

    dev: {
        files: {
            '<%= build.dev.dir %>/scripts/vendor.js': '<%= build.src %>/scripts/vendor.js',
            '<%= build.dev.dir %>/scripts/app.js': '<%= build.src %>/scripts/app.js',
        }
    },
    dist: {
        files: {
            '<%= build.dist.dir %>/scripts/vendor.js': '<%= build.src %>/scripts/vendor.js',
            '<%= build.dist.dir %>/scripts/app.js': '<%= build.src %>/scripts/app.js',
        }
    }

};

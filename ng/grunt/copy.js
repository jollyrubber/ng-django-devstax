"use strict";

module.exports = {

    dev: {
        files: [
            {
                src: '<%= build.src %>/index.html',
                dest: '<%= build.dev.dir %>/index.html'
            }
        ]
    },
    dist: {
        files: [
            {
                src: '<%= build.src %>/index.html',
                dest: '<%= build.dist.dir %>/index.html'
            }
        ]
    }

};

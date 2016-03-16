"use strict";

module.exports = function (/*grunt, options*/) {

    return {

        default: [],

        runserver: [
            'dev',
            'ngconstant:runserver',
            'connect:dev',
            'watch'
        ],

        dev : [
            'clean:dev',
            'ngconstant:dev',
            'ngtemplates:dev',
            'browserify:dev',
            'copy:dev'

        ],

        dist: [
            'clean:dist',
            'ngtemplates:dist',
            'browserify:dist',
            'copy:dist'
        ]

    };
};

"use strict";

module.exports = {

    options: {
        name: 'ng-django-config'
    },

    runserver: {
        options: {
            dest: '<%= build.dev.dir %>/scripts/config.js'
        },
        constants: {
            NG_DJANGO_ENV: {
                apiEndpoint: 'http://localhost:9000/ng_django',
                djangoAdmin: 'http://localhost:9000/admin'
            }
        }
    },

    dev: {
        options: {
            dest: '<%= build.dev.dir %>/scripts/config.js'
        },
        constants: {
            NG_DJANGO_ENV: {
                apiEndpoint: 'https://django-webapp.localdomain:8443/ng_django',
                djangoAdmin: 'https://django-webapp.localdomain:8443/admin'
            }
        }
    },

    qa: {
        options: {
            dest: '<%= build.dist.dir %>/scripts/config.js'
        },
        constants: {
            NG_DJANGO_ENV: {
                apiEndpoint: 'https://qa.django-webapp.localdomain/ng_django',
                djangoAdmin: 'https://qa.django-webapp.localdomain/admin'
            }
        }
    }

};

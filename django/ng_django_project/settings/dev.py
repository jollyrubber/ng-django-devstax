from base import *

DEBUG = True

# http://django-debug-toolbar.readthedocs.org/en/1.4/configuration.html
INTERNAL_IPS = (
    '10.0.2.2', # default gateway on vagrant guest
)

INSTALLED_APPS += [
    'debug_toolbar'
]

DATABASES['default'] = {
    'ENGINE': 'django.db.backends.mysql',
    'NAME': 'dev-db',
    'USER': 'dev-db-user',
    'PASSWORD': 'S3cr3t',
    'HOST': '127.0.0.1',
    'PORT': '3306',
}

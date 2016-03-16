from base import *

DATABASES['default'] = {
    'ENGINE': 'django.db.backends.mysql',
    'NAME': 'qa-db',
    'USER': 'qa-db-user',
    'PASSWORD': 'S3cr3t',
    'HOST': '127.0.0.1',
    'PORT': '3306',
}

#ng-django-devstax

Angular & Django REST Development Stack built with Vagrant & Chef

## Install
- [ChefDK v1.1.6](https://downloads.chef.io/chef-dk/)
- [VirtualBox v5.1.12 r112440](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant v1.9.1](https://www.vagrantup.com/downloads.html)
- A Git client because Chef may be cloning remote repositories

Verify the ChefDK installation with
```shell
$ chef verify
```
### Vagrant Plugins

The following plugins are required

```shell
$ vagrant plugin install vagrant-berkshelf
$ vagrant plugin install vagrant-omnibus
$ vagrant plugin install vagrant-hostmanager
```

### Working Under Vagrant

#### Setup the Django app

For the first time after `vagrant up`

```shell
$ source ~/ng-django-project/bin/activate
$ cd /vagrant/django
$ python manage.py collectstatic --settings=ng_django_project.settings.dev
$ python manage.py migrate --settings=ng_django_project.settings.dev
$ python manage.py createsuperuser --username admin --email admin@localdomain --settings=ng_django_project.settings.dev
```
Access the Apache hosted Django app site at https://django-webapp.localdomain:8443/admin

#### Setup the Angular frontend
```shell
$ cd /vagrant/ng
$ npm install
$ grunt dev
```
Access the Apache hosted Angular app at https://ng-webapp.localdomain:8443

#### Access Points

The following access points are available under vagrant

* http://localhost:9000/admin, Django's development server
```shell
$ python manage.py runserver 0:9000 --settings=ng_django_project.settings.dev
```

* http://localhost:8000, Grunt's development server
```shell
$ grunt runserver
```

* https://django-webapp.localdomain:8443/admin, Apache hosted Django App

* https://ng-webapp.localdomain:8443/#/, Apache hosted Angular App
```shell
$ grunt dev
```

### Knife Solo Deployment

Install [Knife Solo](https://matschaffer.github.io/knife-solo)

```shell
$ chef gem install knife-solo
```

Install Chef client on the target nodes (`ng-server`,`django-server`,`db-server`)

```shell
$ knife solo prepare username@localhost --node-name ng-server --ssh-port 22
$ knife solo prepare username@localhost --node-name django-server --ssh-port 22
$ knife solo prepare username@localhost --node-name db-server --ssh-port 22
```
Provision the target nodes, using the `qa` environment

```shell
$ knife solo cook username@localhost --node-name ng-server --environment qa --forward-agent --ssh-port 22
$ knife solo cook username@localhost --node-name django-server --environment qa --forward-agent --ssh-port 22
$ knife solo cook username@localhost --node-name db-server --environment qa --forward-agent --ssh-port 22
```

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure('2') do |config|

    Vagrant.require_version '>= 1.8.1'

    # vagrant-omnibus: installs latest chef client
    config.omnibus.chef_version = :latest
    # vagrant-berkshelf: downloads cookbook dependencies
    config.berkshelf.enabled = true
    # forward ssh agent
    config.ssh.forward_agent = true

    # cache stuff to make next provision faster
    if Vagrant.has_plugin?('vagrant-cachier')
        # cache stuff
        config.cache.scope = :box
    end

    if Vagrant.has_plugin?('vagrant-hostmanager')
        config.hostmanager.enabled = true
        config.hostmanager.manage_host = true
        config.hostmanager.aliases = %w(ng-webapp.localdomain django-webapp.localdomain)
    end

    config.vm.provider :virtualbox do |v|
        v.memory = 2048
        v.cpus = 2
    end

    config.vm.box = 'bento/ubuntu-15.04'

    config.vm.network :forwarded_port, guest: 443, host: 8443, auto_correct: true # Apache SSL
    config.vm.network :forwarded_port, guest: 3306, host: 3306, auto_correct: true # MySQL
    config.vm.network :forwarded_port, guest: 9000, host: 9000, auto_correct: true # DJango runserver
    config.vm.network :forwarded_port, guest: 8000, host: 8000, auto_correct: true # Grunt Connect
    config.vm.network :forwarded_port, guest: 35729, host: 35729, auto_correct: true # Grunt Live Reload

    config.vm.provision :chef_solo do |chef|

        chef.log_level = :info
        chef.json = {
            :ark => {
                :package_dependencies => [ 'multitail' ]
                },
            :nodejs => {
                :version => '4.4.0',
                :install_method => 'source',
                :source => {
                    :checksum => '2cfc76292576d17a8f2434329221675972c96e5fd60cd694610f53134079f92e'
                    },
                :npm_packages => [
                    { :name => 'grunt-cli' }
                    ]
                },
            'ng-django-devstax' => {
                :mysql => {
                    'root-password' => 'Ch4ng3me'
                    },
                'django-db' => {
                    :host => '127.0.0.1',
                    :name => 'dev-db',
                    :username => 'dev-db-user',
                    :password => 'S3cr3t',
                    'root-password' => 'Ch4ng3me'
                    },
                'django-virtualenv' => {
                    :virtualenv => '/home/vagrant/ng-django-project',
                    'pip-requirements' => '/vagrant/django/requirements.txt'
                    },
                'ng-webapp' => {
                    'server-name' => 'ng-webapp.localdomain',
                    :docroot => '/vagrant/ng/dev'
                    },
                'django-webapp' => {
                    'server-name' => 'django-webapp.localdomain',
                    :docroot => '/vagrant/django',
                    :virtualenv => '/home/vagrant/ng-django-project',
                    'django-settings' => 'ng_django_project.settings.dev',
                    'django-project-name' => 'ng_django_project'
                    }
                }
        }

        chef.add_recipe 'apt'
        chef.add_recipe 'ark'
        chef.add_recipe 'git'
        chef.add_recipe 'nodejs'
        chef.add_recipe 'apache2'
        chef.add_recipe 'apache2::mod_ssl'
        chef.add_recipe 'apache2::mod_wsgi'
        chef.add_recipe 'ng-django-devstax::mysql'
        chef.add_recipe 'ng-django-devstax::django-db'
        chef.add_recipe 'ng-django-devstax::django-virtualenv'
        chef.add_recipe 'ng-django-devstax::django-webapp'
        chef.add_recipe 'ng-django-devstax::ng-webapp'

    end

end

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure('2') do |config|

    Vagrant.require_version '>= 1.9.1'

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

    config.vm.box = 'bento/ubuntu-16.04'

    config.vm.provision :chef_zero do |chef|

        chef.log_level = :warn

        chef.environments_path = 'environments'
        chef.roles_path = 'roles'
        chef.nodes_path = 'nodes'

    end

    config.vm.define :devstax, primary: true do |devstax|

        devstax.vm.hostname = 'ng-django-devstax'

        devstax.vm.provider :virtualbox do |v|
            v.memory = 2048
            v.cpus = 2
        end

        devstax.vm.network :forwarded_port, guest: 443, host: 8443, auto_correct: true # Apache SSL
        devstax.vm.network :forwarded_port, guest: 3306, host: 3306, auto_correct: true # MySQL
        devstax.vm.network :forwarded_port, guest: 9000, host: 9000, auto_correct: true # DJango runserver
        devstax.vm.network :forwarded_port, guest: 8000, host: 8000, auto_correct: true # Grunt Connect
        devstax.vm.network :forwarded_port, guest: 35729, host: 35729, auto_correct: true # Grunt Live Reload

    end

end

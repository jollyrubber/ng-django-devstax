server_name = node['ng-django-devstax']['django-webapp']['server-name']
docroot_dir = node['ng-django-devstax']['django-webapp']['docroot']
virtualenv_dir = node['ng-django-devstax']['django-webapp']['virtualenv']
django_settings_module = node['ng-django-devstax']['django-webapp']['django-settings']
django_project_name = node['ng-django-devstax']['django-webapp']['django-project-name']

# create vhost in apache config from template
web_app "#{server_name}-ssl" do
    template "django-webapp-ssl.conf.erb"
    server_name server_name
    server_port 443
    docroot docroot_dir
    django_project_name django_project_name
    django_settings_module django_settings_module
    wsgi_python_path "#{docroot_dir}:#{virtualenv_dir}/lib/python2.7/site-packages"
end

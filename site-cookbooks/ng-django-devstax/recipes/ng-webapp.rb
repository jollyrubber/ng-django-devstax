server_name = node['ng-django-devstax']['ng-webapp']['server-name']
docroot_dir = node['ng-django-devstax']['ng-webapp']['docroot']

# create vhost in apache config from template
web_app "#{server_name}-ssl" do
    template "ng-webapp-ssl.conf.erb"
    server_name server_name
    server_port 443
    docroot docroot_dir
end

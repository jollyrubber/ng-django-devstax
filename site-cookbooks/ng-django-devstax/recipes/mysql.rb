# Install MySQL Client & Server

db_root_passwd = node['ng-django-devstax']['mysql']['root-password']

# install MySQL daemon & client
mysql_service :default do
    initial_root_password db_root_passwd
    action [:create, :start]
end
mysql_client :default do
    action :create
end

mysql2_chef_gem :default do
    action :install
end

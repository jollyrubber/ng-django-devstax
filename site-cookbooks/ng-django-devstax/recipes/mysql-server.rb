# Install MySQL Client & Server

db_root_passwd = node['ng-django-devstax']['mysql-server']['root-password']

# install MySQL daemon & client
mysql_service :default do
    initial_root_password db_root_passwd
    action [:create, :start]
end

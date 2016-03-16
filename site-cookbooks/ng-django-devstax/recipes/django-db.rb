db_host = node['ng-django-devstax']['django-db']['host']
db_name = node['ng-django-devstax']['django-db']['name']
db_username = node['ng-django-devstax']['django-db']['username']
db_user_passwd = node['ng-django-devstax']['django-db']['password']
db_root_passwd = node['ng-django-devstax']['django-db']['root-password']

connection_info = {
    :host     => db_host,
    :username => :root,
    :password => db_root_passwd
    }

# create db
mysql_database db_name do
    connection connection_info
    action :create
end

# create user
mysql_database_user db_username do
    connection connection_info
    password db_user_passwd
    action :create
end

# grant user access
mysql_database_user db_username do
    connection connection_info
    password db_user_passwd
    database_name db_name
    host '%'
    action :grant
end

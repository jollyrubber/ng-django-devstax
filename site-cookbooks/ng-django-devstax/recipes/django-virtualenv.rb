python_runtime '2'

python_virtualenv node['ng-django-devstax']['django-virtualenv']['virtualenv'] do
    group node['apache']['group']
end

pip_requirements node['ng-django-devstax']['django-virtualenv']['pip-requirements'] do
    group node['apache']['group']
end

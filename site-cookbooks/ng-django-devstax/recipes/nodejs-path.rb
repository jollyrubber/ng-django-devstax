magic_shell_environment 'PATH' do
    value "$PATH:/usr/local/nodejs-#{node[:nodejs][:install_method]}-#{node[:nodejs][:version]}/bin"
end

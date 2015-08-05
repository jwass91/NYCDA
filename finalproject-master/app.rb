require 'sinatra'
require 'sinatra/activerecord'


set :database, "sqlite3:test.sqlite3"

require './models'


require 'bundler/setup'
require 'rack-flash'
enable :sessions
use Rack::Flash, :sweep => true

set :sessions, true

$access = false




get '/' do
  erb :home
end

get '/registeradmin' do
  erb :registeradmin
end


get '/createadmin' do
  if $access == true
  erb :createadmin
else
  erb :registeradmin
end
end

get '/help' do
  erb :help
end

get '/stock' do
  erb :stock
end

get '/createuser' do
  erb :createuser
end

get '/setpassword' do
  erb :setpassword
end

get '/admin' do
  erb :admin
end

get '/user' do
  erb :user
end

post '/unknown' do
if params[:securepassword] == "bob"
  $access = true
  redirect '/createadmin'
else
  redirect '/'
end
end

post '/newuser' do
  if params[:autoemails] == ":checked" then params[:autoemails] = true else
    params[:autoemails] = false
    # make a variable for the image check if !== to nill if not set it to varabel e
  end
  User.create({
  name: params[:name],
  email: params[:email],
  grade: params[:grade],
  autoemail: params[:autoemails],
  balance: params[:deposit],
  image: params[:dataUrl]
  });
end

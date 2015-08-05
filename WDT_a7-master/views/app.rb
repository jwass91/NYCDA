require 'sinatra'

get '/' do
  erb :home
end

get '/home' do
  erb :home
end

get '/news' do
  erb :news
end

get '/contact' do
  erb :contact
end

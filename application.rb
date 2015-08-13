require 'sinatra'
require 'json'
require_relative './models/movie.rb'

get '/' do 
  File.read(File.join('public', 'index.html'))
end

get '/movies' do 
  content_type :json
  movies = Movie.search(params[:page])
  movies.to_json
end

get '/movies/:id' do
  content_type :json
  movie = Movie.get_movie(params[:id])
  movie.to_json
end
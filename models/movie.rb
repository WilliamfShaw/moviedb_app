require 'httparty'

class Movie
  def self.search(page)
    @movies = HTTParty.get("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=#{page}")['results']
  end

  def self.get_movie(id)
    @movie = HTTParty.get("http://api.themoviedb.org/3/movie/#{id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&&append_to_response=releases")
  end
end

get '/' do
  @valentines = Valentine.all
  @rand_valentines = @valentines.order("RANDOM()").first
  erb :index
end


post '/' do
  Valentine.create(name: params[:name], compliment: params[:compliment], image: params[:image])
  redirect '/'
end

get '/' do
  @valentines = Valentine.all
  @rand_valentines = @valentines.order("RANDOM()").first
  erb :index
end


post '/' do
  Valentine.create(params[:valentine])
  redirect '/'
end

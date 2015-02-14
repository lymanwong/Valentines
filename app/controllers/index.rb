get '/' do
  @valentines = Valentine.all
  @rand_valentines = @valentines.order("RANDOM()").first
  erb :index
end


post '/' do
  Valentine.create(params[:valentine])
  redirect '/'
end

after do
  ActiveRecord::Base.connection.close
end

get '/show' do
  @valentines = Valentine.all
  erb :show
end

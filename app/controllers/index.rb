get '/' do
  @valentines = Valentine.all
  @rand_valentines = @valentines.order("RANDOM()").first
  erb :index
end


# post '/' do
#   Valentine.create(params[:valentine])
#   redirect '/'
# end

post '/' do
  if request.xhr?
    p "XHR request received!"
    Valentine.create(
      compliment: params["valentine"]["compliment"],
      name: params["valentine"]["name"],
      image: params["valentine"]["image"]
      )
  else
    return "Error - XHR request not recieved!"
  end
end

after do
  ActiveRecord::Base.connection.close
end

get '/show' do
  @valentines = Valentine.all
  erb :show
end

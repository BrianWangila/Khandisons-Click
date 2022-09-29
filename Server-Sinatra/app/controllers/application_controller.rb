class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # get "/" do
  #   { message: "Good luck with your project!" }.to_json
  # end

  get '/members/:id' do
    member= Member.find(params[:id])
    member.to_json
  end

  get "/members" do 
    member = Member.all
    member.to_json
  end

  post "/members" do
    member = Member.create(
      firstName: params[:firstName],
      lastName: params[:lastName],
      postion: params[:postion],
      email: params[:email],
      developer: params[:developer]
    )
    member.to_json
  end

  patch '/members/:id' do
    members= Members.find(params[:id])
    members.update(
      firstName: params[:firstName],
      lastName: params[:lastName],
      postion: params[:postion],
      email: params[:email],
      developer: params[:developer]

    )
    members.to_json
  end

  delete '/members/:id' do 
    members = Member.find(params[:id])
    members.delete
    members.to_json
  end

end

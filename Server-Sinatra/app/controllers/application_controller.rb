class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/members/:id' do
    member= Member.find_by(id: params[:id])
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
      position: params[:position],
      email: params[:email],
      vetted: params[:vetted]
    )
    member.to_json
  end

  patch '/members/:id' do
    members = Member.find_by(id: params[:id])
    members.update(
      firstName: params[:firstName],
      lastName: params[:lastName],
      position: params[:position],
      email: params[:email],
      vetted: params[:vetted]

    )
    members.to_json
  end

  delete '/members/:id' do 
    members = Member.find_by(id: params[:id])
    members.delete
    members.to_json
  end

end

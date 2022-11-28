Rails.application.routes.draw do
  resources :user_homes
  resources :user_pet_relationships
  resources :pets
  resources :users
  resources :sprites
  resources :gm_responses, only: [:index, :show]

  
  
  #resources :sprites
  #TODO: this should be serialized
  
  
  #custom routes
  #TODO: update this for new project
  #this should be a special serializer
  get "/mypets", to: "player_owns_tamas#mypets"
  
  
  #auth routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # # route to test your configuration
  # get '/hello', to: 'application#hello_world'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
end

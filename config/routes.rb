Rails.application.routes.draw do
  resources :gm_responses, only: [:index, :show]

  resources :players
  
  resources :tama_characters
  resources :player_owns_tamas
  resources :tama_has_sprites
  resources :player_has_foods
  
  #resources :sprites
  #TODO: update this for new project
  resources :player_friends_tamas
  
  
  #custom routes
  #TODO: update this for new project
  get "/mypets", to: "player_owns_tamas#mypets"
  
  
  #auth routes
  #TODO: players should be users
  post "/signup", to: "users#create"
  get "/me", to: "players#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # # route to test your configuration
  # get '/hello', to: 'application#hello_world'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
end

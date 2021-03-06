Rails.application.routes.draw do

  root to: "home#index"

  resources :profile, :as => :profiles
  
  post '/whole_food', to: 'whole_food#create'
  delete '/whole_food', to: 'whole_food#delete'

  devise_for :users

end

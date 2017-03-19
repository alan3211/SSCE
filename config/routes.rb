Rails.application.routes.draw do
  root 'inicio#index'
  get 'gestionescolar/constancias.html',to:'inicio#index'
  get 'gestionescolar/iniciarsesion.html',to:'inicio#iniciarsesion'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

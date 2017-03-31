Rails.application.routes.draw do
  get 'jefegestionescolar/index'

  root 'inicio#index'
  get 'gestionescolar/constancias.html',to:'inicio#index'
  get 'gestionescolar/iniciarsesion.html',to:'inicio#iniciarsesion'
  get 'gestionescolar/recuperar-contraseña.html', to:'inicio#recuperar_contraseña'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

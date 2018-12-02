Rails.application.routes.draw do
  root to: 'site#index'
  resources :ingredients
  scope '/api' do
    resources :drinks
  end
end
Rails.application.routes.draw do
  root to: 'site#index'
  scope '/api' do
    resources :drinks
    resources :ingredients
  end
end
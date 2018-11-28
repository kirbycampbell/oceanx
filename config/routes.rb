Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :drinks, only: [:index, :create, :destroy, :update]
    end
  end
end
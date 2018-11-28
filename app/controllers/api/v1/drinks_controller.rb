class Api::V1::DrinksController < Api::V1::BaseController
    def index
      respond_with Drink.all
    end
  
    def create
      respond_with :api, :v1, Drink.create(drink_params)
    end
  
    def destroy
        respond_with Drink.destroy(params[:id])
    end
  
    def update
      drink = Drink.find(params["id"])
      drink.update_attributes(drink_params)
      respond_with drink, json: drink
    end
  
    private
  
    def drink_params
      params.require(:drink).permit(:id, :title, :description)
    end
  end
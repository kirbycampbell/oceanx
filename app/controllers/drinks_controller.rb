
class DrinksController < ApplicationController
  # GET /drinks
  def index
    @drinks = Drink.all
    render json: @drinks.to_json(:include => { :ingredients => { :only => [:id, :description] }})
  end

  # GET /drinks/:id
  def show
    @drink = Drink.find(params[:id])
    render json: @drink.to_json(:include => { :ingredients => { :only => [:id, :description] }})
  end


  def create
    @drink = Drink.new(drink_params)
    #@drink.ingredients.create(:ingredients)
    if @drink.save
      render json: @drink.to_json
    else 
      render json: @drink.errors
    end
  end

  def update
    drink = Drink.find(params[:id])
    drink.update_attributes(drink_params)
    render json: drink
  end
  
  def destroy
    Drink.destroy(params[:id])
  end

  private

  def drink_params  
    params.require(:drink).permit(:id, :title, :description, :steps, :source)
  end

  def ing_params
    params.require(:ingredients).permit(:ingredients)
  end

end

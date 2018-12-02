
class DrinksController < ApplicationController
  # GET /drinks
  def index
    @drinks = Drink.select("id, title, description, steps, source").all
    render json: @drinks.to_json
  end

  # GET /drinks/:id
  def show
    @drink = Drink.find(params[:id])
    render json: @drink.to_json(:include => { :ingredients => { :only => [:id, :description] }})
  end


  def create
    @drink = Drink.new(drink_params)
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

end

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
    drink = Drink.create(drink_params)
    render json: drink.to_json
  end

  private

  def drink_params
    params.require(:drink).permit(:id, :title, :description)
  end

end
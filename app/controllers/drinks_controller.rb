
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

  def def new
    @drink = Drink.new
  end
  

  def create
    @drink = Drink.create(title: title, description: description, steps: steps, source: source)
  end
end
class PetsController < ApplicationController
  before_action :set_pet, only: %i[ show update destroy ]

  # GET /pets
  def index
    @pets = Pet.all
    render json: @pets
  end

  # GET /pets/1
  def show
    render json: @pet
  end

  #GET /mypets
  def mypets
    #TODO:this should be a special serializer
    @pets = Pet.find_by(user_id = session[:user_id])
    render json: @pets
  end

  # POST /pets
  def create
    @pet = Pet.create!(pet_params)
    render json: @pet
  end

  # PATCH/PUT /pets/1
  def update
     @pet.update!(pet_params)
      render json: @pet
  end

  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pet
      @pet = Pet.find!(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pet_params
      params.require(:pet).permit(:name, :hunger, :attention, :weight, :height, :species, :diet, :sprite_id)
    end
end

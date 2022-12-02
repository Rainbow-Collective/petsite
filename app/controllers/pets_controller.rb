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
    @player_owns_pet = UserPetRelationship.find_by!(user_id: session[:user_id])
    render json: @player_owns_pet
    end

  # POST /pets
  def create
    @pet = Pet.create!(pet_params)
    @user_pet_relationship = UserPetRelationship.create!(user_id: session[:user_id], pet_id: @pet.id, relationship: 5, player_is_owner: true)
      render json: @pet, status: :created, location: @pet
  end

  # PATCH/PUT /pets/1
  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pet
      @pet = Pet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pet_params
      params.require(:pet).permit(:name, :hunger, :attention, :weight, :height, :species, :diet, :sprite)
    end
end

class UserPetRelationshipsController < ApplicationController
  before_action :set_user_pet_relationship, only: %i[ show update destroy ]

  # GET /user_pet_relationships
  def index
    @user_pet_relationships = UserPetRelationship.all

    render json: @user_pet_relationships
  end

  # GET /user_pet_relationships/1
  def show
    render json: @user_pet_relationship
  end

  # POST /user_pet_relationships
  def create
    @user_pet_relationship = UserPetRelationship.new(user_pet_relationship_params)

    if @user_pet_relationship.save
      render json: @user_pet_relationship, status: :created, location: @user_pet_relationship
    else
      render json: @user_pet_relationship.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_pet_relationships/1
  def update
    if @user_pet_relationship.update(user_pet_relationship_params)
      render json: @user_pet_relationship
    else
      render json: @user_pet_relationship.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_pet_relationships/1
  def destroy
    @user_pet_relationship.destroy
  end
private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_pet_relationship
      @user_pet_relationship = UserPetRelationship.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_pet_relationship_params
      params.require(:user_pet_relationship).permit(:user_id, :pet_id, :relationship, :player_is_owner, :bio, :guestbook)
    end
end

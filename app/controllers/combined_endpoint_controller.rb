class CombinedEndpointController < ApplicationController

    before_action :set_pet, only: %i[ pet_action_relationship_update ]

#https://stackoverflow.com/questions/33049573/rails-4-how-to-update-a-model-field-from-a-different-controller/33049802#33049802
 # PATCH/PUT /pet-action-relationship/1
 def pet_action_relationship_update
    unless pet_action_form_params_for_relationship[:relationship].blank?
      @pet.update!(pet_action_form_params_for_pet)
      relationship = set_user_pet_relationship
      relationship_update = relationship.update!(relationship: pet_action_form_params_for_relationship[:relationship])
    end
    render json: {pet: @pet, relationship: @user_pet_relationship} 
end

private 

def pet_action_form_params_for_pet
    params.require(:pet).permit(:name, :hunger, :attention, :weight, :height, :species, :diet, :sprite)
  end
  def pet_action_form_params_for_relationship
    params.require(:user_pet_relationship).permit(:relationship)
  end

  def set_pet
    @pet = Pet.find(params[:id])
  end

  def set_user_pet_relationship
    @user_pet_relationship = UserPetRelationship.find_by!(pet_id: @pet.id)
  end

  #private end

end

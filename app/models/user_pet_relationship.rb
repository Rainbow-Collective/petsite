class UserPetRelationship < ApplicationRecord
  belongs_to :user
  belongs_to :pet

#combined endpoint methods
def relationship_model_pet_action_update
end

end

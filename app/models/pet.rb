class Pet < ApplicationRecord
has_many :user_pet_relationships, dependent: :destroy

#combined endpoint methods
def pet_model_relationship_update
end


end

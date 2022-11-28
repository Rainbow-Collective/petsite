class UserPetRelationshipSerializer < ActiveModel::Serializer
  attributes :id, :relationship, :player_is_owner, :bio, :guestbook
  has_one :user
  has_one :pet
end

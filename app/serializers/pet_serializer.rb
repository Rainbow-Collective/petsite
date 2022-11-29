class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :hunger, :attention, :weight, :height, :species, :diet
  has_one :sprite
end

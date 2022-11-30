class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :hunger, :attention, :weight, :height, :species, :diet, :sprite
end

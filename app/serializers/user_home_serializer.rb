class UserHomeSerializer < ActiveModel::Serializer
  attributes :id, :save_game_data
  has_one :user
end

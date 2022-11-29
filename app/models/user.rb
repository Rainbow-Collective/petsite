class User < ApplicationRecord
    has_secure_password
    belongs_to :sprite
    has_one :user_home
    has_many :user_pet_relationships
    has_many :pets, through: :user_pet_relationships


    validates_presence_of :name, :password
    validates :password, length: {minimum: 5}
    

end

class User < ApplicationRecord
    has_secure_password
    has_one :user_home
    has_many :user_pet_relationships
    has_many :pets, through: :user_pet_relationships
    
    validates_presence_of :name
    # validates :password, length: {minimum: 5}
end

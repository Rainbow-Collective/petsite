class CreateUserPetRelationships < ActiveRecord::Migration[7.0]
  def change
    create_table :user_pet_relationships do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true
      t.integer :relationship
      t.boolean :player_is_owner
      t.string :bio
      t.string :guestbook

      t.timestamps
    end
  end
end

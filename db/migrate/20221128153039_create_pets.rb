class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :hunger
      t.integer :attention
      t.float :weight
      t.float :height
      t.string :species
      t.string :diet
      t.references :sprite, null: false, foreign_key: true

      t.timestamps
    end
  end
end

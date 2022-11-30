class CreateUserHomes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_homes do |t|
      t.string :save_game_data
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

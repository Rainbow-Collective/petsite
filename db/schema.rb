# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_30_024006) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.integer "hunger"
    t.integer "attention"
    t.float "weight"
    t.float "height"
    t.string "species"
    t.string "diet"
    t.integer "sprite"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sprites", force: :cascade do |t|
    t.string "image_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_homes", force: :cascade do |t|
    t.string "save_game_data"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_homes_on_user_id"
  end

  create_table "user_pet_relationships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pet_id", null: false
    t.integer "relationship"
    t.boolean "player_is_owner"
    t.string "bio"
    t.string "guestbook"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pet_id"], name: "index_user_pet_relationships_on_pet_id"
    t.index ["user_id"], name: "index_user_pet_relationships_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.integer "sprite_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_homes", "users"
  add_foreign_key "user_pet_relationships", "pets"
  add_foreign_key "user_pet_relationships", "users"
end

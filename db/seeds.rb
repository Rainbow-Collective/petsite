# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creating Sprites for Characters"

sprite1 = Sprite.create!(  image_path: "{'type': 'character', 'path':'client/public/images/mystic_woods_v0.2/sprites/characters/player.png'}" )
sprite2 = Sprite.create!(  image_path: "{'type': 'pet', 'path':'/images/CuteRPG-Free/16x16/pets/Pet06_04.png'}" )
sprite3 = Sprite.create!(  image_path: "{'type': 'pet', 'path':'/images/CuteRPG-Free/16x16/pets/Pet06_01.png'}" )

puts "done creating sprites for characters"

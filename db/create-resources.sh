echo "save models + controllers to git stash"
git add .
git stash
echo "drop db"
rails db:drop
echo "remove resources"
rails d resource sprite
rails d resource user
rails d resource pet
rails d resource user_pet_relationship
rails d resource user_home
rails d controller combined_endpoint
echo "create resources"
rails g scaffold sprite image_path --no-test-framework
rails g scaffold user name password_digest sprite_id:integer --no-test-framework
rails g scaffold pet name hunger:integer attention:integer weight:float height:float species diet sprite:integer --no-test-framework
rails g scaffold user_pet_relationship user:references pet:references relationship:integer player_is_owner:boolean bio guestbook --no-test-framework
rails g scaffold user_home save_game_data user:references --no-test-framework
rails g controller combined_endpoint
echo "git stash pop to get back any changes to your controllers"
#git stash pop
echo "create, migrate, seed db"
rails db:create db:migrate db:seed
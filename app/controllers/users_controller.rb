class UsersController < ApplicationController
    include ActionController::Cookies

    def create
       player = Player.create!(player_params)
        render json: player, status: :created
    end

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user
    end

    private

    def player_params
        params.permit(:name, :password, :password_confirmation)
    end

end

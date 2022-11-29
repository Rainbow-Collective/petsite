class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create

    # def create
    #     user = User.find_by(username: params[:username])
    #     session[:user_id] = user.id
    #     render json: user
    #   end

    # def create
    #     user = Player.find_by(name: params[:username])
    #     session[:user_id] = user.id
    #     render json: user
    #   end

      def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

      def destroy
        session.delete :user_id
        head :no_content
      end
      

end

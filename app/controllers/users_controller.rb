class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]
  skip_before_action :authorized, only: :create
  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end
#INFO: this is the way zyoungdale does it
#   def show 
#     user = User.find(session[:user_id])
#     if user
#         render json: user, status: :ok
#     else
#         render json: { error: "Not authorized"}, status: :unauthorized
#     end
# end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user,  status: 201
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    #TODO: use session/user id here
    # def set_user
    #   @user = User.find(session[user_id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :sprite_id, :password, :password_confirmation, :password_digest)
    end
end

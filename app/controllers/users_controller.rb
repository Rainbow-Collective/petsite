class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
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

  # POST /users
  def create
    binding.break
    render json: User.create!(user_params),  status: 201
  end

  # PATCH/PUT /users/1
  def update
      @user.update!(user_params)
      render json: @user
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :password, :password_confirmation, :sprite_id)
    end
end

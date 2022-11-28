class UserHomesController < ApplicationController
  before_action :set_user_home, only: %i[ show update destroy ]

  # GET /user_homes
  def index
    @user_homes = UserHome.all

    render json: @user_homes
  end

  # GET /user_homes/1
  def show
    render json: @user_home
  end

  # POST /user_homes
  def create
    @user_home = UserHome.new(user_home_params)

    if @user_home.save
      render json: @user_home, status: :created, location: @user_home
    else
      render json: @user_home.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_homes/1
  def update
    if @user_home.update(user_home_params)
      render json: @user_home
    else
      render json: @user_home.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_homes/1
  def destroy
    @user_home.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_home
      @user_home = UserHome.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_home_params
      params.require(:user_home).permit(:save_game_data, :user_id)
    end
end

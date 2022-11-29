class SpritesController < ApplicationController
  before_action :set_sprite, only: %i[ show update destroy ]

  # GET /sprites
  def index
    @sprites = Sprite.all
    render json: @sprites
  end

  # GET /sprites/1
  def show
    render json: @sprite
  end

  # POST /sprites
  def create
    @sprite = Sprite.new(sprite_params)
    render json: @sprite, status: :created, location: @sprite
  end

  # PATCH/PUT /sprites/1
  def update
    @sprite.update(sprite_params)
  end

  # DELETE /sprites/1
  def destroy
    @sprite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sprite
      @sprite = Sprite.find!(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sprite_params
      params.require(:sprite).permit(:image_path)
    end
end

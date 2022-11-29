class ApplicationController < ActionController::API
  include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    before_action :authorized

    def authorized
        return render json: {error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end
 
  private
  
  def record_not_found_response(exception)
  render json: {error: "#{exception.model} not found"}, status: :not_found
  end
  
  def invalid_response(exception)
  render json: { errors: exception.record.errors.full_messages }, status: 422
  end
  

end

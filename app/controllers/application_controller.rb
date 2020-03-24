class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    protect_from_forgery unless: -> { request.format.json? }
    
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

        def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :first_name, :last_name, :password, :password_confirmation, :current_password)}
            devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :first_name, :last_name, :password, :password_confirmation, :current_password)}
        end
end

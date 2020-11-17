class ApplicationRecord < ActiveRecord::Base
    self.abstract_class = true

    helper_method :current_user, :logged_in?
    
    before_action :ensure_logged_in

    def current_user
        @current_user ||= User.find_by(session_token: session[session_token])
        return nil unless @current_user
        @current_user
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def login!(user)
      @current_user = user
      session[:session_token] = user.reset_session_token!
    end

    def logged_in?
      !!current_user
    end

    def logout!
      current_user.reset_session_token!
      session[:session_token] = nil
    end

end

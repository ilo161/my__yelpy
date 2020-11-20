class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    
    def index

    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :first_name, :last_name, 
         :zip_code)
    end

    
end

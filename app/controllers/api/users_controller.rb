require 'open-uri'
class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.avatar.attached? == false

            url = "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png"
            
            temp_file = open(url)

            arr = url.split("user_avatars/")

            @user.avatar.attach(io: temp_file, filename: arr[1])
        end

        if @user.save
            login!(@user)
            render :show
        else
            # 
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

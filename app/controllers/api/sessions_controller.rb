class Api::SessionsController < ApplicationController


    before_action :ensure_logged_in, only:[:destroy]

    def create
        @user = User.find_by_credentials(
            params[:session][:username],
            params[:session][:password]
        )



        if @user

            login!(@user)

            render "api/users/show"
        else

            render json: {base: ['invalid credentials', "username already exists"]}, status: 401
        end

    end

    def destroy
        unless current_user
            render json: {base: ["No Current User to Log out"]}, status: 401
        end

        logout!

    end



end

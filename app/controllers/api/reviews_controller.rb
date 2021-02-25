class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else
            render json: {base: ["Please complete all fields"]}, status: 401
        end
    end

    def edit

    end

    def destroy
        @review = Review.find(params[:id])

        if logged_in?
            if @review
                currId = current_user.id

                if @review.user_id == currId
                    @review.destroy
                    render :destroy
                end
            else
                render json: {base:["Unable to delete"] }, status: 401
            end
        end
    end

    private
    def review_params
        params.require(:review).permit(:business_id, :user_id, :title, :body, :rating)
    end
end

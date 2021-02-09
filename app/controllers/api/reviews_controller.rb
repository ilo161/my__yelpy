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

    private
    def review_params
        params.require(:review).permit(:business_id, :user_id, :title, :body, :rating)
    end
end

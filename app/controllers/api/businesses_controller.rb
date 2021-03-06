class Api::BusinessesController < ApplicationController

    def index
        @bizs = Business.includes(:reviews)
        
        if @bizs
            render :index
        else
            render json: {base: ["Network down, please try again later"]}, status: 408
        end
    end

    def create
        @biz = Business.new(business_params)

        if @biz.save
            render :show
        else
            render json: {base: ["Please complete all fields"]}, status: 401
        end

    end

    def show
        @biz = Business.includes(:reviews).find(params[:id])

        if @biz
            render :show
        else
            render json: {base: ["Business not found"]}, status: 401
        end

    end

    def update
        
        @biz = Business.find(params[:id])
        
        if @biz.update(business_params)
            render :show
        else
            render json: {base: "Some fields may not be blank"}
        end

    end

    def destroy
        @biz = Business.find(params[:id])

        if @biz

            @biz.destroy
            render :destroy
            # if current_user.id === @biz.owner_id
        else
            
            render json: {base:["Unable to delete business at this time"] }, status: 401
        end
    end

    def search
        @bizs = Business.includes(:reviews).search_by(params[:search])
        # @bizs = @bizs.in_bounds(bounds)
        render :search_results
    end

    private

    def business_params
        params.require(:business).permit(:business_name, :address, :city, :state, 
            :zip_code, :first_class, :website, :category, :open_time, :close_time,
             :open_time_sat, :close_time_sat, :open_time_sun, :close_time_sun, 
             :owner_id, :latitude, :longitude, photos: [])
    end

    def bounds
        params[:bounds]
    end
    
end

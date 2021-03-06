json.extract! business, :id, :business_name, :address, :city, :state, :zip_code, 
:first_class, :website, :category, :open_time, :close_time, :open_time_sat,
:close_time_sat, :open_time_sun, :close_time_sun, :phone, :latitude, :longitude

# json.photoUrl url_for(business.photos[0])

json.photos business.photos do |photo|
    json.photoUrl url_for(photo)
end

biz_total_reviews = Review.where(business_id: "#{business.id}").count

json.total_business_reviews biz_total_reviews


if business.reviews.length > 0
    # for sorting by ID (Type find)
    # biz_review_ids = business.reviews.map {|review| review.id}
    # sorted_biz_review_ids = biz_review_ids.sort.reverse!

    
    
    #  For some reason my seeds file will ignore order and insert new reviews 
    # in the middle,
    # json.reviews business.reviews do |review|
    
    #(Type find)
    # json.reviews sorted_biz_review_ids.each do |id|
    
    reviews = business.reviews.order('id DESC') 
    json.reviews reviews do |review|
        # temp fix - find via @biz - not efficient. efficiency down. (Type find)
        # review = business.reviews.find(id)

        json.extract! review, :id, :business_id, :user_id, :title, :body, :rating 

        user = User.find(review.user_id)

        user_total_review = Review.select(:user_id).where(user_id: "#{user.id}").count

        json.author do
            json.partial! "api/users/user", user: user
            json.total_reviews user_total_review
        end
        
        if user.avatar.attached? == true
            json.userAvatarUrl url_for(user.avatar)
        else
            json.userAvatarUrl nil
        end
    end
end
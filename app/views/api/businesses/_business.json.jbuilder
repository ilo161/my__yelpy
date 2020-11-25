json.extract! business, :id, :business_name, :address, :city, :state, :zip_code, 
:first_class, :website, :category, :open_time, :close_time, :open_time_sat,
:close_time_sat, :open_time_sun, :close_time_sun

json.photoUrl url_for(business.photos[0])

json.reviews business.reviews do |review|
    json.extract! review, :business_id, :user_id, :title, :body, :rating 
end
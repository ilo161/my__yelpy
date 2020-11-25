class Business < ApplicationRecord
    categories = ["coffeeshop", "restaurant"]; 

    validates :business_name, :address, :city, :state, :zip_code, presence:true
    validates :category, inclusion: { in: [0, 1] }


    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_many_attached :photos
end

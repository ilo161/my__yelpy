class Business < ApplicationRecord
    categories = ["coffeeshop", "restaurant"]; 

    validates :business_name, :address, :city, :state, :zip_code, presence:true
    validates :category, inclusion: { in: [0, 1] }


    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_many_attached :photos

    def self.search_by(query)
        query_parts = query.split(" ")
        query_parts = query_parts.map{|word| word.downcase}
        mapped_query = query_parts.map{|word| "lower(business_name) LIKE '%#{word}%'"}.join(" OR ")

        if query_parts.any? { |i| ["coffee", "coffeeshop", "espresso", "drip", "house"].include? i }
            mapped_query += " OR  category = 0"
        end

        if query_parts.any? { |i| ["restaurant", "restaurants", "mexican", "taco", "tacos",
        "burrito", "burritos", "salsa", "spicy", "tostada"].include? i }
            mapped_query += " OR  category = 1"
        end


        Business.where(mapped_query)
    end

    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude > ?", bounds[:southWest][:lng])
            .where("longitude < ?", bounds[:northEast][:lng])
    end

end

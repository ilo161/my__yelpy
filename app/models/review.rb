class Review < ApplicationRecord
    validates :business_id, :user_id, :body, :rating, presence:true

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business
end

class Review < ApplicationRecord
    validates :business_id, :user_id, :title, :body, :rating, presence:true

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business
end

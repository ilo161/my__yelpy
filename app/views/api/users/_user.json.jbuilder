json.extract! user, :id, :username, :first_name, :last_name, :email, :zip_code

user_total_reviews = Review.where(user_id: "#{user.id}").count

json.user_total_reviews user_total_reviews

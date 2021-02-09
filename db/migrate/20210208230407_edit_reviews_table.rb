class EditReviewsTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :title, true
  end
end

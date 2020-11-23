class AddDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :owner_id, :integer, default: 1
  end
end

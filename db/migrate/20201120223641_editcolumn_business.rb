class EditcolumnBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :owner_id, :integer, default: 1
  end
end

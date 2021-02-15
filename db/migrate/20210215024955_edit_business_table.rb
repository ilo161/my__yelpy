class EditBusinessTable < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :longitude, :float
    add_column :businesses, :latitude, :float
  end
end

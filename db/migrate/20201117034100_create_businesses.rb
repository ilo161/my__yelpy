class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.string :state, null:false
      t.integer :zip_code, null:false
      t.boolean :first_class, default:false
      t.string :website, null:false, default:""
      t.integer :category, null:false
      t.integer :open_time
      t.integer :close_time
      t.integer :open_time_sat
      t.integer :close_time_sat
      t.integer :open_time_sun
      t.integer :close_time_sun
      t.timestamps
    end
  end
end

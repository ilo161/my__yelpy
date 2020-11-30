class AddPhoneToBusiness < ActiveRecord::Migration[5.2]
  def change

    add_column :businesses, :phone, :integer
  end
end

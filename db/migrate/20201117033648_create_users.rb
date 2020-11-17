class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null:false, unique:true
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :email, null:false, unique:true
      t.string :session_token, null:false, unique:true
      t.string :password_digest, null:false
      t.boolean :admin, default:false
      t.integer :zip_code, null:false

      t.timestamps
    end
  end
end

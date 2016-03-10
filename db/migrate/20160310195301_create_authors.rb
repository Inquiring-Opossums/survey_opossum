class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :avatar

      t.timestamps null: false
    end
  end
end

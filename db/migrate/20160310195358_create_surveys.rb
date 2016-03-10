class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.integer :author_id
      t.string :name
      t.text :description
      t.string :categories

      t.timestamps null: false
    end
  end
end

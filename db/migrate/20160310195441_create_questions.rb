class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :survey_id
      t.text :question_text
      t.text :description
      t.text :taker_input

      t.timestamps null: false
    end
  end
end

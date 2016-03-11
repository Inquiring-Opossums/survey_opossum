class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :question_id
      t.integer :taker_id
      t.text :answer

      t.timestamps null: false
    end
  end
end

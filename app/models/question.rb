class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :answers
  validates :question_text, presence: true
  accepts_nested_attributes_for :answers,
	    reject_if: :all_blank,
	    allow_destroy: true
  # validates :survey_id, presence: true

end

class Question < ActiveRecord::Base
  belongs_to :survey
  validates :question, presence: true
  validates :survey_id, presence: true
end

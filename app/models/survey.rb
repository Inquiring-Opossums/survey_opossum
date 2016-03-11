class Survey < ActiveRecord::Base
  belongs_to :author
  has_many :questions
  has_many :takers
  accepts_nested_attributes_for :questions,
	    reject_if: :all_blank,
	    allow_destroy: true
  validates :author, presence: true
  validates :name, presence: true, uniqueness: true

end

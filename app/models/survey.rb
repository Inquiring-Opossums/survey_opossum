class Survey < ActiveRecord::Base
  belongs_to :author
  has_many :questions
  accepts_nested_attributes_for :questions
  validates :author, presence: true
  validates :name, presence: true, uniqueness: true
  
end

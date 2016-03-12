class Taker < ActiveRecord::Base
  has_many_and_belongs_to :survey
  has_many :answers

end

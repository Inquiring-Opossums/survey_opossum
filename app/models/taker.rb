class Taker < ActiveRecord::Base
  has_many :surveys
  has_many :answers

end

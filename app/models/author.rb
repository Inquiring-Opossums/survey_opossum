class Author < ActiveRecord::Base
  has_many :surveys
  has_secure_password
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  validates_confirmation_of :password

end

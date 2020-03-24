class Profile < ApplicationRecord
    belongs_to :user
    has_many :whole_foods
end

class User <ActiveRecord::Base
  has_many :transactions
end

class Transaction <ActiveRecord::Base
  has_many :users
end

class Item <ActiveRecord::Base
end

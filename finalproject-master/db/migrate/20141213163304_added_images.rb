class AddedImages < ActiveRecord::Migration
  def change
    add_column :users, :image, :string
    add_column :items, :image, :string
  end
end

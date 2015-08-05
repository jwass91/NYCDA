class CreatedSecondMigration < ActiveRecord::Migration
  def change
    create_table :profile do |t|
      t.string :bio
      t.string :city
      t.integer :age
    end  
  end
end

class CreateThirdMigration < ActiveRecord::Migration
  def change
    drop_table :profile    
  end
end

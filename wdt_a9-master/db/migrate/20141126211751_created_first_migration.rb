class CreatedFirstMigration < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.integer :age
    end

  end
end
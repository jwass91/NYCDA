class Workplease < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :grade
      t.float :balance
      t.boolean :admin
      t.string :password
      t.boolean :autoemail
    end
    create_table :transactions do |t|
      t.integer :users
      t.float :amount
      t.datetime :date
    end
    create_table :items do |t|
      t.string :name
      t.boolean :full
      t.boolean :low
      t.boolean :out
    end
  end
end

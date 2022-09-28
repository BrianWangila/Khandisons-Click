class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :firstName
      t.string :lastName
      t.string :position
      t.string :email
      t.boolean :vetted
      t.timestamps
      
    end
  end
end

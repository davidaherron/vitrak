class CreateWholeFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :whole_foods do |t|
      t.belongs_to :profile
      t.string :name
      t.string :fdcid
      t.string :string

      t.timestamps
    end
  end
end

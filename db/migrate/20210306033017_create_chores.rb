class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.string :name
      t.string :status
      t.references :house_hold, null: false, foreign_key: true

      t.timestamps
    end
  end
end

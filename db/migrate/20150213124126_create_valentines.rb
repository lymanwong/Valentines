class CreateValentines < ActiveRecord::Migration
  def change
    create_table :valentines do |t|
      t.string :name
      t.string :compliment
      t.string :image
      t.timestamps
    end
  end
end

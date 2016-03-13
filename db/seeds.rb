# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:

# Question.create!()
Author.create!(name: "Rip Taylor", email: "rip@rip.com", password: "monkey")
Author.create!(name: "Bob Boberts", email: "bob@bob.com", password: "monkey")
Author.create!(name: "Dan Levy", email: "danlevy@danlevy.com", password: "monkey")
Survey.create!(author_id: 1, name: "Personality Test", categories: "Psychological")
Survey.create!(author_id: 1, name: "Cheese Test", categories: "Cheese")
Survey.create!(author_id: 1, name: "Karate Test", categories: "Karate")
Survey.create!(author_id: 1, name: "Cornbread Test", categories: "Cornbread")
Survey.create!(author_id: 1, name: "Athletics Test", categories: "Athletics")
Survey.create!(author_id: 1, name: "English Test", categories: "English")

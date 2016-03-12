# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Survey.create(author_id: 70, name: "Personality Test", categoies: "Psychological")
Survey.create(author_id: 71, name: "How was your experience?", categoies: "Customer Feedback")
Survey.create(author_id: 72, name: "Election 2016", categoies: "Political")
Survey.create(author_id: 73, name: "Prime Time Line Up", categoies: "Entertainment")
Survey.create(author_id: 74, name: "Local Infrastucure", categoies: "Community")
Survey.create(author_id: 75, name: "Carolina School Survey", categoies: "Education")
Survey.create(author_id: 76, name: "44567", categoies: "Human Resources")
Survey.create(author_id: 77, name: "Who's Your Favorite?", categoies: "For Fun")
Survey.create(author_id: 78, name: "Product Identification", categoies: "Market Research")

json.array!(@authors) do |author|
  json.extract! author, :id, :name, :email, :password_digest, :avatar
  json.url author_url(author, format: :json)
end

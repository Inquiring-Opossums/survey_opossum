json.array!(@surveys) do |survey|
  json.extract! survey, :id, :author_id, :name, :description, :categories
  json.url survey_url(survey, format: :json)
end

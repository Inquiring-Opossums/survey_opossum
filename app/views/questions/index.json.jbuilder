json.array!(@questions) do |question|
  json.extract! question, :id, :survey_id, :question_text, :description, :taker_input
  json.url question_url(question, format: :json)
end

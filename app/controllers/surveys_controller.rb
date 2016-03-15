class SurveysController < ApplicationController
  before_action :set_survey, only: [:show, :edit, :update, :destroy]
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :at_least_one_question?, only: [:published]


  # GET /surveys
  # GET /surveys.json
  def index
    if session[:user_id].nil?
      @surveys = Survey.all
    else
      @surveys = Survey.where(author_id: session[:user_id])
    end
  end

  # GET /surveys/1
  # GET /surveys/1.json
  def show
  end
  # GET /surveys/new
  def new
    @skip_link = true
    @survey = Survey.new
    @survey.questions.build
    @user = Author.find_by_id(session[:user_id])
  end

  # GET /surveys/1/edit
  def edit
    if @survey.published? == true
      redirect_to :back, notice: 'You cannot edit published surveys'
    else
      @survey.questions.build
    end
  end

  # POST /surveys
  # POST /surveys.json
  def create
    @survey = Survey.new(survey_params)
    @user = Author.find_by_id(session[:user_id])
    if @survey.save
      redirect_to @survey, notice: 'Survey was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /surveys/1
  # PATCH/PUT /surveys/1.json
  def update
    if @survey.update(survey_params)
      redirect_to @survey, notice: 'Survey was successfully updated.'
    else
      render :edit
    end
  end
  def answers
    @survey = Survey.find(params[:survey_id])
  end

  # DELETE /surveys/1
  # DELETE /surveys/1.json
  def destroy
    @survey.destroy
    redirect_to surveys_url, notice: 'Survey was successfully destroyed.'
  end

  def published
    @survey = Survey.find(params[:survey_id])
    @survey.update_attributes(published: true)
    redirect_to survey_path(@survey)
  end

  def take
    @survey = Survey.find(params[:survey_id])
    if @survey.published? == true
      @taker = Taker.new
      @survey = Survey.find(params[:survey_id])
      @survey.answers.build
    else
      redirect_to surveys_path, notice: 'This survey has not been published. Get outta here. Go home kid'
    end
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_survey
      @survey = Survey.find(params[:id])
    end

    def set_user
      @user = Author.find(session[:user_id])
    end
    def at_least_one_question?
      @survey = Survey.find(params[:survey_id])
      if @survey.questions.count > 0
        true
      else
        redirect_to surveys_path, notice: "You must have at least one question to publish!"
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def survey_params
      params.require(:survey).permit(:author_id, :name, :description, :categories, :published,
      questions_attributes: [:id, :question_text, :description, :taker_input, :_destroy,
      answers_attributes: [:id, :question_id, :taker_id, :answer]])
    end
end

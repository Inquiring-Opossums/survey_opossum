class SessionsController < ApplicationController
  def new
    
  end

  def create
    user = Author.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id

      redirect_to new_survey_path, notice: "You have successfully logged in!"
    else
      flash[:alert] = "Login failed: invalid email or password."
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path, notice: "You have logged out."
  end
end

class SessionsController < ApplicationController
  def new
  end

  def create
    user = Author.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id

      redirect_to user_dashboard_path, notice: "You have successfully logged in!"
      # redirect_to send("#{params[:user_type].downcase}s_path"), notice: "You have successfully logged in!"
    else
      flash.now[:alert] = "Login failed: invalid email or password."
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path, notice: "You have logged out."
  end
end

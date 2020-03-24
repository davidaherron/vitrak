class ProfileController < ApplicationController
  def index
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def new
    @profile = Profile.new
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      flash[:success] = "Profile created."
      redirect_to(profile_path(@profile))
    else
      flash[:error] = "Profile not created."
      render ('new')
    end
  end

  def edit
    @profile = Profile.find(params[:id])
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      flash[:success] = "Profile updated."
      redirect_to(profile_path(@profile))
    else
      flash[:error] = "Profile update failed."
      render('edit')
    end
  end

  private 

  def profile_params
    params.require(:profile).permit(
      :first_name,
      :last_name,
      :weight,
      :height,
      :gender,
      :activity,
      :user_id
    )
  end

end

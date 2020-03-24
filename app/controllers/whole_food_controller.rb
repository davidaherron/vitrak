class WholeFoodController < ApplicationController

    def create
        @whole_food = WholeFood.new(whole_food_params)
        if @whole_food.save
          flash[:success] = "Food saved."
          redirect_to(root_path)
        else
          flash[:error] = "WWWhoops."
          render ('new')
        end
      end

      private 

      def whole_food_params
        params.require(:whole_food).permit(
          :name,
          :fdcid,
          :profile_id
        )
      end

end
//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){

$("#newSurBtn").on("click", function(){
  console.log("I clicked!");
  $("#newSurvey").removeClass("off");
  $("#newQBtn").removeClass("off");
});

var questionCount =1;

//I cant figure out where to put this so it works. So I just embedded it in the HTML itself.>
$("#newQBtn").on("click", function(){
  console.log("I clicked for question " + questionCount);
  $("#newQuestion").append("<div class='field Question'><input placeholder='text' type='text' name='survey[questions_attributes]["+ questionCount +"][question_text]' id='survey_questions_attributes_" + questionCount + "_question_text'><input placeholder='description' type='text' name='survey[questions_attributes]["+ questionCount +"][description]' id='survey_questions_attributes_"+ questionCount +"_description'><input name='survey[questions_attributes][" + questionCount + "][_destroy]' type='hidden' value='" + questionCount + "'><input type='checkbox' value='1' name='survey[questions_attributes][" + questionCount + "][_destroy]' id='survey_questions_attributes_" + questionCount + "__destroy'><span>Delete</span></div>");
  questionCount++
});//end newQbtn click

});//end DOM loaded function

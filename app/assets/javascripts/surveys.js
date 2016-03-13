//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){

$("#check").on("click", function(){
});//end check click

$("#newSurBtn").on("click", function(){
  console.log("I clicked!");
  $("#newSurvey").removeClass("off");
  $("#newQBtn").removeClass("off");
  //$("#surveySubmit").removeClass("off");
});

var questionCount =0;

//I cant figure out where to put this so it works. So I just embedded it in the HTML itself.>
$("#newQBtn").on("click", function(){

  console.log("I clicked for question " + questionCount);

  $("#newQuestion").append("<div class='field Question' id='Q"+ questionCount +"><span class='newQL'>Question #"+ (questionCount+1)+"<select name='survey[questions_attributes][" + questionCount + "][taker_input]'id='survey_questions_attributes_"+questionCount+"_taker_input'><option value='1'>Yes or No</option><option value='2'>Short Answer</option><option value='3'>Long Answer</option></select></span><span class='newQMid'><input placeholder='text' type='text' name='survey[questions_attributes]["+ questionCount +"][question_text]' id='survey_questions_attributes_" + questionCount + "_question_text'><input placeholder='description' type='text' name='survey[questions_attributes]["+ questionCount +"][description]' id='survey_questions_attributes_"+ questionCount +"_description'></span><span class='newQR'><input name='survey[questions_attributes][" + questionCount + "][_destroy]' type='hidden' value='" + questionCount + "'><input id='check' type='checkbox' value='1' name='survey[questions_attributes][" + questionCount + "][_destroy]' id='survey_questions_attributes_" + questionCount + "__destroy'><i class='fa fa-caret-up fa-2x'></i><i class='fa fa-times fa-2x'></i><i class='fa fa-caret-down fa-2x'></i></span></div>");
  questionCount++
});//end newQbtn click



});//end DOM loaded function

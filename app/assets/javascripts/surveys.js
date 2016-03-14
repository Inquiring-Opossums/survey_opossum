//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){

//this helper function just prints whatever i clicked on to the console.
// $("body").click(function(thing){
//   console.log(thing);
// });//end check click

//IT IS IMPORTANT TO REMEMBER THAT WHEN SELECTING GENERATED ELEMENTS YOU HAVE TO, AND I MEAN MF'IN MUST, TARGET THE CONTAINING ELEMENT AND USE THE SECONDARY SELECTOR INSIDE THE .on() FUNCTION TO GRAB THE THING YOU ACTUALLY WANT.
$("#newQuestion").on("click", ".fa-times", function(e){
  console.log("DELETE");
});
$("#newQuestion").on("click", ".fa-caret-up", function(){
  console.log("MOVE UP");
});//end check click

$("#newQuestion").on("click", ".fa-caret-down", function(){
  console.log("MOVE DOWN");
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

  $("#newQuestion").append("<div class='field Question' id='Q"+ questionCount +"'><span class='newQL'>Question #"+ (questionCount+1)+"<select name='survey[questions_attributes][" + questionCount + "][taker_input]'id='survey_questions_attributes_"+questionCount+"_taker_input'><option value='1'>Yes or No</option><option value='2'>Short Answer</option><option value='3'>Long Answer</option></select></span><span class='newQMid'><input placeholder='text' type='text' name='survey[questions_attributes]["+ questionCount +"][question_text]' id='survey_questions_attributes_" + questionCount + "_question_text' class='Qtext'><input placeholder='description' type='text' name='survey[questions_attributes]["+ questionCount +"][description]' id='survey_questions_attributes_"+ questionCount +"_description' class='Qdesc'></span><span class='newQR'><input name='survey[questions_attributes][" + questionCount + "][_destroy]' type='hidden' value='" + questionCount + "'><i class='fa fa-caret-up fa-2x'></i><span id='DELETE"+questionCount+"'><i class='fa fa-times fa-2x'></i></span><i class='fa fa-caret-down fa-2x'id='"+questionCount+"'></i></span></div>");
  questionCount++

  var position = $("body").prop('scrollHeight');
   $("body").scrollTop(position);


});//end newQbtn click


//<input id='check' type='checkbox' value='1' name='survey[questions_attributes][" + questionCount + "][_destroy]' id='survey_questions_attributes_" + questionCount + "__destroy'>


});//end DOM loaded function

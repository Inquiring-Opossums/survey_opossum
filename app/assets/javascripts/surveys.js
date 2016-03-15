//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){

//this helper function just prints whatever i clicked on to the console.
// $("body").click(function(thing){
//   console.log(thing);
// });//end check click

var questionCount =0;


var renumberQs = function(){
  var qList = $(".Question"); //this grabs all new quesiton divs on the page
  var qText =[];
  var qDesc =[];

  console.log(qList);
  for(var i=0; i<qList.length;i++)
  {
    var tempString = $(qList[i]).first("newQL").html();
    //$(qList[i]).first(".newQL").text("Question # " + (i+1));

    qText.push($(qList[i]).find(".Qtext").val());//grabs the text value of this question
    qDesc.push($(qList[i]).find(".Qdesc").val());//grabs the descrioption value of this question

    console.log("this is the question text = " + $(qList[i]).find(".Qtext").val());
    console.log("this is the question desc = " + $(qList[i]).find(".Qdesc").val());

    //console.log("I GET THIS FROM THE HTML =" + tempString)
    //"Question # "+(i+1)

    var tempIndex = tempString.indexOf("<");//get the index of where the tag starts
    var tempString2 = tempString.slice(tempIndex+1);//this should cut out the displayed old number only.
    //DO IT AGAIN TO GET THE INDEX OF THE SECOND OPEN TAG!
    tempIndex = tempString2.indexOf("<");
    var tempString3 = tempString2.slice(tempIndex);//this should cut out the displayed old number only.

    //console.log("WITHOUT NUMBER = " + tempString3);
     var tempStringFinal = "<span class='newQL'>Question # " + (i+1) + tempString3 //adds the NEW number to the front of the question
    //console.log("TO PUT BACK IN HTML = " + tempStringFinal);


    $(qList[i]).first("newQL").html(tempStringFinal); //returns the newly numbered label Along with all the proper html to the proper place on the page... hopefully.
  }//end for loop
  var remainingQs = $(".Question");
  for(var k=0;k<remainingQs.length;k++)
  {
    $(remainingQs[k]).find(".Qtext").val(qText[k]);//sets the value of the remaining quesitons to what the qtext array says it should be.
    $(remainingQs[k]).find(".Qdesc").val(qDesc[k]);
  }

  questionCount = $(qList).length;
  //console.log(qText);
};//end of renumberQs


//IT IS IMPORTANT TO REMEMBER THAT WHEN SELECTING GENERATED ELEMENTS YOU HAVE TO, AND I MEAN MF'IN MUST, TARGET THE CONTAINING ELEMENT AND USE THE SECONDARY SELECTOR INSIDE THE .on() FUNCTION TO GRAB THE THING YOU ACTUALLY WANT.
$("#newQuestion").on("click", ".fa-times", function(e){
  console.log("DELETE: " + $(this).parent().parent().parent().attr("id"));
  $(this).parent().parent().parent().remove();//removes the currently selected element (which happens to be the entire new question div)
  $(this).parent().parent().parent().html(" ");
  renumberQs();
});

$("#newQuestion").on("click", ".fa-caret-up", function(){
  console.log("MOVE UP: " + $(this).attr("id"));
});//end check click

$("#newQuestion").on("click", ".fa-caret-down", function(){
  console.log("MOVE DOWN: " + $(this).attr("id"));
});//end check click

$("#newSurBtn").on("click", function(){
  console.log("I clicked!");
  $("#newSurvey").removeClass("off");
  $("#newQBtn").removeClass("off");
  //$("#surveySubmit").removeClass("off");
});

//I cant figure out where to put this so it works. So I just embedded it in the HTML itself.>
$("#newQBtn").on("click", function(){

  console.log("I clicked for question " + questionCount);


  $("#newQuestion").append("<div class='field Question' id='Q"+ questionCount +"'><span class='newQL'>Question #"+ (questionCount+1)+"<select name='survey[questions_attributes]["+ questionCount +"][taker_input]' id='survey_questions_attributes_'" + questionCount +"_taker_input'><option value=''>Question type</option><option value='1'>Yes or No</option><option value='2'>Short Answer</option><option value='3'>Long Answer</option></select></span><span class='newQMid'><input placeholder='text' type='text' name='survey[questions_attributes]["+ questionCount +"][question_text]' id='survey_questions_attributes_" + questionCount + "_question_text' class='Qtext'><input placeholder='description' type='text' name='survey[questions_attributes]["+ questionCount +"][description]' id='survey_questions_attributes_"+ questionCount +"_description' class='Qdesc'></span><span class='newQR'><input name='survey[questions_attributes][" + questionCount + "][_destroy]' type='hidden' value='" + questionCount + "'><i class='fa fa-caret-up fa-2x'id='UP"+questionCount+"'></i><span id='DELETE"+questionCount+"'><i class='fa fa-times fa-2x'></i></span><i class='fa fa-caret-down fa-2x'id='DOWN"+questionCount+"'></i></span></div>");


  questionCount++

  var position = $("body").prop('scrollHeight');
   $("body").scrollTop(position);

   //renumberQs();

});//end newQbtn click





});//end DOM loaded function

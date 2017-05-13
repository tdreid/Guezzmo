window.onload=function(){
var theNumber = _.random(1, 100);
var theList = $("#list");
var theBanner = $("#triumph");

$("#submit").click(function() {
  var theGuess = $("#guess").val();
  $("#guess").val("");
  if (theGuess == theNumber) {

    $("#submit").prop('disabled', true);
    $("#guess").prop('disabled', true);
    theBanner.text("That's right! " + theGuess + " is the number of which I am thinking.");
    theBanner.append('<br /><button onClick="location.reload(true);" >Play again</button>');


  } else if (theGuess < theNumber) {

    theList.append("<li>" + getRandomPhrase() + theGuess + " is too low.</li>");

  } else {

    theList.append("<li>" + getRandomPhrase() + theGuess + " is too high</li>");
  }

});

$("#guess").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#submit").click();
  }
});

function getRandomPhrase() {
  var phrases = [
    "No. ",
    "Nope. ",
    "Guess again. ",
    "Give it another try. ",
    "That's not it. ",
    "Well, not quite. ",
    "Okay. You can try again. ",
    "No reason to give up now. ",
    "Nah. ",
    "Naw. ",
    "I hope you get it next time. "
  ]
  var index = _.random(0, phrases.length - 1);
  return phrases[index];
}

}

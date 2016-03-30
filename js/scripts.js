// business logic

 /* apparently JS doesn't know what user input is yet, we can't use it here */
var arrayVowels = ["a", "e", "i", "o", "u"];


var pigLatin = function(arrayWords) {
  for (var i = 0; i <= arrayWords.length; i += 1) {
      for (var x = 0; x <= arrayVowels.length; x += 1) {
      if (arrayWords[i].charAt(0) === arrayVowels[x]) {
        alert(arrayWords[i] + "ay");
      // } else if ((arrayWords[0] !== arrayVowels[x]) && (arrayWords[1] === arrayVowels[x])) {
      //   arrayWords.slice(1, i) + "ay";
      //
      // } else if ((arrayWords[0] !== arrayVowels[x]) && (arrayWords[1] !== arrayVowels[x]) && (arrayWords[2] === arrayVowels[x])) {
      //       arrayLetters +
      //   alert("not a vowel");

  // }
  // arrayWords.forEach(function(word){
  //   var arrayLetters = word.split("");
  //   if (arrayLetters[0] === "a" || arrayLetters[0] === "e" || arrayLetters[0] === "i" || arrayLetters[0] === "o" || arrayLetters[0] === "u") {
  //     arrayLetters = arrayLetters + "ay";
  //     alert(arrayLetters);
    }
    }
  };




// user interface logic

// arrayWords.forEach(function(word){
//   var arrayLetters = word.split("");
//   if (arrayLetters[0] === arrayVowels[]) {
//     arrayLetters = arrayLetters + "ay";
//     alert(arrayLetters);
//   }
// });
// arrayWords.foreach(function(word) {
//   var arrayLetters = word.split("");
//   if (arrayLetters[0] !== arrayVowels[])
//    if (arrayLetters)
// }
// });

$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var arrayWords = userInput.split(" ");
    var result = pigLatin(arrayWords);
    $("#result").text(result);
  });
});

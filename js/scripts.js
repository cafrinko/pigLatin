// business logic

 /* apparently JS doesn't know what user input is yet, we can't use it here */
var arrayVowels = ["a", "e", "i", "o", "u"];
var arrayOther = ["qu"];

var pigLatin = function(arrayWords) {
  for (var i = 0; i <= arrayWords.length; i += 1) {
    for (var j = 0; j <= arrayVowels.length; j += 1) {
      for (var k = 0; k <= arrayOthers.length; k += 1) {
        var arrayLetters = arrayWords[i].split("");
          for (var l = 0; l <= arrayLetters.length ; l += 1)
            if (arrayLetters[l] !== arrayVowels[x] {
              arrayWords[i].substr(i) + arrayWords[i].substr(i - 1, i + 1);
          } else if (arrayLetters[l] === arrayOther[k]) {
              arrayWords[i].substr(i) + arrayWords[i].substring(i - 1, i + 1);
          } else (arrayWords[i].charAt(i) === arrayVowels[x]) {
              arrayWords[i].concat("ay");


  // }
  // arrayWords.forEach(function(word){
  //   var arrayLetters = word.split("");
  //   if (arrayLetters[0] === "a" || arrayLetters[0] === "e" || arrayLetters[0] === "i" || arrayLetters[0] === "o" || arrayLetters[0] === "u") {
  //     arrayLetters = arrayLetters + "ay";
  //     alert(arrayLetters);
    }
    }
  };

  for (var k = 0; k <= arrayOthers.length; k += 1) {
    for (var l = 0; l <= arrayLetters.length; l += 1) {


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

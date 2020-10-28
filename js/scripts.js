$(document).ready(function(){
  $('#palindromes').submit(function(event) {
    event.preventDefault();
    const userInput = $('#word').val();
    const array = userInput.split(" ");
    // const together = array.join("");
    // const string1 = together.toString();
    const reverse = array.reverse();
    alert(array);
    alert(reverse);
    // for (let i = 0; i < reverse.length; i++) {
      if (array.toString() === reverse.toString()) {
        alert("does this work");
      } else {
      }
  });
});
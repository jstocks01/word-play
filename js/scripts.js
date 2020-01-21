$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var sentence = $("input#sentence").val();
  var words = sentence.split(' ');

  var newArray = [];
  words.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    }
  });
  
  $("form").hide();
  $(".output").append(newArray.reverse().join(' ')).show();
  });
});

$(document).ready(function() {
  $("form#sides").submit(function(event) {

    var side1 = parseInt($("#input1").val());
    var side2 = parseInt($("#input2").val());
    var side3 = parseInt($("#input3").val());

    if (side1 && side2 && side3) {
      if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
        alert ("That's not a triangle!");
      } else if (side1 === side2 && side1 === side3) {
        alert("Equilateral");
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      } 
    } else {
      alert("Go back to school.");
    }
    event.preventDefault();
  });
});
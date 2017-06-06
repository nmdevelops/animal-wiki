$("document").ready (function () {
 $("select#animal").click (function () {
   $("#turtles").hide();
   $("#snakes").hide();
   $("#insects").hide();
 });
 $("#chooseAnimal form").submit (function(event) {
//console.log("form submitted");
   var animal = $("select#animal").val();
//   console.log(animal);
   if (animal === "1") {
     $("#turtles").show();
   } else if (animal === "2") {
     $("#snakes").show();
   } else if (animal === "3") {
     $("#insects").show();
   }
event.preventDefault();
 });
});

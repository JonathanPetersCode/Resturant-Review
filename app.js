
$("#helpText").on("mouseover", function(){
  $("#helpText span").toggle();
});

$("#addNew").on("click", function(){
const newRestaurant= $("#newRestaurantInput").val();
$("ul").append("<li>" + newRestaurant + "</li>");
});

$("ul").on("dblclick", "li" , function(){
  $(this).toggleClass("strike");
});


$(document).ready(function(){

  $("h1").fadeIn(2000);
  $("img").fadeIn(5000);
  $("img").slideUp(10000);
  $("img").slideDown(10000);

  $("h4").animate({opacity: 1.0}, 3000);
  $("p").animate({opacity: 1.0}, 3000);

  $("button").click(function(){
    $(".sub").fadeIn(5000);
  });

});

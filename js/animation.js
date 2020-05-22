$(document).ready(function()
{
  var image = $(".bild");
  $(image).click(function()
  {
    image.animate({opacity: "0."}, "slow").animate({opacity : "1.0"}, "slow");
  })

  var groesser = $(".btn ,.groesser");

  groesser.hover(function(){
    //funktion1
    $(this).animate({fontSize: '1.5em'});
  },
  function(){
  //funktion2
  $(this).animate({fontSize: '1em'});
  });

var text = $("#text");
var clickcounter=0;

text.hover(function(){
  //funktion1
  $(this).animate({fontSize: '1.5em'});
},
function(){
//funktion2
$(this).animate({fontSize: '1em'});
});

  text.click(function()
  {
    clickcounter++;
    if(clickcounter == 3)
    {
      alert("Good job! You found the EasterEgg!");
      clickcounter=0;
    }
  $(this).animate({opacity: "0"}, 3000);
  $(this).animate({opacity: "1"}, 3000);
  })
})

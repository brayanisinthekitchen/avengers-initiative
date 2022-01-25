
var rickroll = new Audio('rickroll.mp3');

var pressed = ""
document.addEventListener("keypress", function(event){
   console.log(event.key);
   pressed += event.key;
   if(pressed.includes("rickroll")){
       rickroll.play()
   }

});

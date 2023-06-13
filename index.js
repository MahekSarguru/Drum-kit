var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( var i = 0 ;i <NumberOfDrumButtons;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 
    var ButtonInnerHtml = this.innerHTML;
 
    switch (ButtonInnerHtml) {
   
        case "w":
          var tom3 = new Audio ('sounds/tom-3.mp3');
     tom3.play();
        break;
       
        case "a":
            var tom3 = new Audio ('sounds/tom-4.mp3');
       tom3.play();
          break;
          
          case "s":
            var tom3 = new Audio ('sounds/tom-2.mp3');
       tom3.play();
          break;
          
          case "d":
            var tom3 = new Audio ('sounds/snare.mp3');
       tom3.play();
          break;
          
          case "j":
            var tom3 = new Audio ('sounds/crash.mp3');
       tom3.play();
          break;
          
          case "k":
            var tom3 = new Audio ('sounds/tom-1.mp3');
       tom3.play();
          break;
          
          case "l":
            var tom3 = new Audio ('sounds/kick-bass.mp3');
       tom3.play();
          break;
        

    default:
        break;
 }
});
}
   


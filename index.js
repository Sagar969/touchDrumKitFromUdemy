for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnhtml = this.innerHTML;
    makeSound(btnhtml);
    addStyle(btnhtml);
  });
}
document.addEventListener("keydown", function(event) {
    var keypressed= event.key;
    makeSound(keypressed);
    addStyle(keypressed);
})

function makeSound(key) {
    switch (key) {
        case "w":
          var wsound = new Audio("sounds/tom-1.mp3");
          wsound.play();
          break;
        case "a":
          var asound = new Audio("sounds/tom-2.mp3");
          asound.play();
          break;
        case "s":
          var ssound = new Audio("sounds/tom-3.mp3");
          ssound.play();
          break;
        case "d":
          var dsound = new Audio("sounds/tom-4.mp3");
          dsound.play();
          break;
        case "j":
          var jsound = new Audio("sounds/snare.mp3");
          jsound.play();
          break;
        case "k":
          var ksound = new Audio("sounds/crash.mp3");
          ksound.play();
          break;
        case "l":
          var lsound = new Audio("sounds/kick-bass.mp3");
          lsound.play();
          break;
  
        default:
        //   alert("Wrong Key!!!");
      }

}
function addStyle(currentKey) {
    var activebtn= document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");
    setTimeout(() => {
        activebtn.classList.remove("pressed");
    }, 50);
}


// var audio= new Audio("sounds/tom-1.mp3");
//     audio.play();

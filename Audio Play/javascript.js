
for(var i=0; i<3; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var test=this.innerHTML;
      
    audioPlay(test);

  
   
    });
}

function audioPlay(test){

    switch(test){
        case "song1":
            var audio=new Audio("sounds/cofe.mp3");
            audio.play();
            break;
    
            case "song2":
            var audio=new Audio("sounds/jahid.mp3");
            audio.play();
            break;
    
            case "song3":
            var audio=new Audio("sounds/rain.mp3");
            audio.play();
            break;
}

}

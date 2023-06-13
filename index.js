

var a = document.querySelectorAll("button");

var audio = new Audio('./sounds/tom-1.mp3');


function caseSound(key) {
    switch (key) {
           case "w":
               var shinjiAudio = new Audio("sounds/shinji.mp3");
                shinjiAudio.play();
            var shinjiGif = document.querySelector("." + key);
                shinjiGif.classList.add("gif-shinji");
                
            
                setTimeout(() => {
                    shinjiGif.classList.remove("gif-shinji");
                    },20000)
            
               break;
            
               break;
            case "a":
                var kajiAudio = new Audio("sounds/Kaji.mp3");
                kajiAudio.play();
                var kajiGif = document.querySelector("." + key);
                kajiGif.classList.add("gif-kaji");
                
            
                setTimeout(() => {
                    kajiGif.classList.remove("gif-kaji");
                    },35000)
            
               break;
            case "s":
               var kaworuAudio = new Audio("sounds/Kaworu.mp3");
                kaworuAudio.play();
                var kaworuGif = document.querySelector("." + key);
                    kaworuGif.classList.add("gif-kaworu");
                
            
                setTimeout(() => {
                    kaworuGif.classList.remove("gif-kaworu");
                    },73000)
            
            
            break;
       
            case "d":
               var misatoAudio = new Audio("sounds/Misato.mp3");
                misatoAudio.play();
                var misato = document.querySelector("." + key);
                misato.classList.add("gif-misato");
                setTimeout(() => {
                misato.classList.remove("gif-misato");



                },13000)
            
            
            break;
       
            case "j":
                var reiAudio = new Audio("sounds/Rei.mp3");
                reiAudio.play();
                var reiGif = document.querySelector("." + key);
                reiGif.classList.add("gif-rei");
                setTimeout(() => {
                    reiGif.classList.remove("gif-rei");
                
                }, 73000)
            
            break;
       
            case "k":
                var asukaAudio = new Audio("sounds/asuka.mp3");
                asukaAudio.play();
                var asukaGif = document.querySelector("." + key);
                asukaGif.classList.add("gif-asuka");
                setTimeout(() => {
                asukaGif.classList.remove("gif-asuka");



                },39000)
            
            break;
       
            case "l":
               var tom4 = new Audio("sounds/kick-bass.mp3");
              tom4.play();
            
            break;
       
       
       
        default:
            break;
        }
    

}









for (var i = 0; i < a.length; i++){
    
    a[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.getAttribute("class");
       
        
        caseSound(buttonInnerHtml);
        

        
    });


}

/*
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);






    activeButton.classList.add("gif"); 

    setTimeout(function () {
        activeButton.classList.remove("pressed");

        

    },700)
    


}
*/

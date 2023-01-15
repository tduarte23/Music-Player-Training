var x = document.getElementById("myAudio");
let click = false
function PlayToogle() {
    
    click = !click; 
    if (click) {
        Play();
    } else {
        Pause();
    }
}

function Play(){
    x.play();     
};

function Pause(){
    x.pause();
};
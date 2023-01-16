var x = document.getElementById("myAudio");
var element = document.querySelector('.after');

function aply(data) {
  const zxc = document.getElementsByTagName('h1');

  for (let i = 0; i < zxc.length; i++){
  document.getElementsByTagName('h1')[i].innerHTML = data.name
  document.getElementsByTagName('p')[i].innerHTML = data.artists[0].name
  console.log(data.artists[0].name)
  }
}

const url = "https://api.spotify.com/v1/tracks/4gT3mNJA8lnlkYFqGZ8IA2";

const options = {
  headers: {
    Authorization: "Bearer BQC3jVhPo74_Kl0_9sM_8YudQ6AUo2_pGFYlD0wNY0Z7sm44y7R4ywZxVIcyiJFfMbLX4MqlMNRLYH2fbcHF9mNxLOXyVuPtNaYqdCndPSgk7e65nSVMZXDNw0WevqGtY-y8C6MZ2zHWyoH-HgkW3OK_wDYydPI9LLW5ZSc93Rp0XsuJEmjwW4WTyLaEdLq5I8g"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => aply(data));

document.querySelector('.after').style.animationPlayState = "paused";

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
    document.querySelector('.after').style.animationPlayState = "running";   
};

function Pause(){
    x.pause();
    document.querySelector('.after').style.animationPlayState = "paused";
};
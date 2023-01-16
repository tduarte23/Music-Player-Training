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
    Authorization: "Bearer ######auth-token######"
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

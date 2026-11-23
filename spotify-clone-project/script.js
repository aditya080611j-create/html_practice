let songs;
function secondsToMinutesSeconds(seconds) {
if (isNaN(seconds) || seconds < 0) {
return "00:00";
}

const minutes = Math.floor(seconds / 60);
const remainingSeconds = Math.floor(seconds % 60);

const formattedMinutes = String(minutes).padStart(2, '0');
const formattedSeconds = String(remainingSeconds).padStart(2, '0');

return `${formattedMinutes}:${formattedSeconds}`;
}

let currentsong=new Audio();
async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/spotify-clone-project/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}
function playMusic(track,pause=false){
    // let audio=new Audio("/spotify-clone-project/songs/"+track)
    currentsong.src="/spotify-clone-project/songs/"+track
    if(!pause){
        currentsong.play();
        play.src="pause.svg"
    }
    document.querySelector(".songinfo").innerHTML=decodeURI(track) ;
    document.querySelector(".songtime").innerHTML="00:00/00:00"
}
async function main() {
    // Set up the panel controls before loading songs so they work even if
    // the song request is slow or fails.
    document.querySelector(".hamburger")?.addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close")?.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(".left").style.left = "-100%";
    });

    songs = await getsongs();
    console.log(songs);
    playMusic(songs[0],true)

    let songul = document.querySelector(".songlist").getElementsByTagName("ol")[0];
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li>
        <img class="invert" src="music-svgrepo-com.svg" alt="music">
                            <div class="info">
                                <div>${song}</div>
                                <div><b><u><i>Noni</i></b></u></div>
                            </div>
                                <div class="playnow">
                                    <span>play now</span>
                                    <img class="invert" src="play.svg" alt="play">
                                </div>
                                </li>`;
    }
    // Attach an event listener to each song
Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
e.addEventListener("click", element=>{
console.log(e.querySelector(".info").firstElementChild.innerHTML)
playMusic(e.querySelector(".info").firstElementChild.innerHTML)
})
}
)
// attach event listener to play pause 
play.addEventListener("click",() => {
    if(currentsong.paused){
        currentsong.play()
        play.src="pause.svg"
    }
    else{
        currentsong.pause();
        play.src="play.svg"
    }
})

//add event listener to songtime
currentsong.addEventListener("timeupdate",() => {
    console.log(currentsong.currentTime,currentsong.duration);
    document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
    document.querySelector(".circle").style.left=(currentsong.currentTime/currentsong.duration)*100+"%";
})
//add event listener to seekbar 
document.querySelector(".seekbar").addEventListener("click", e=>{
    let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100
    document.querySelector(".circle").style.left = percent+"%"
    currentsong.currentTime=((currentsong.duration)*percent)/100
})
//add event listner to previous
previous.addEventListener("click",() => {
    console.log("prev");
    let index =songs.indexOf(currentsong.src.split("/").slice(-1) [0])
    if((index-1) >=0){
        playMusic(songs[index-1])
    }
})
next.addEventListener("click",() => {
    console.log("next");
    let index =songs.indexOf(currentsong.src.split("/").slice(-1) [0])
    if((index+1) < songs.length) {
        playMusic(songs[index+1])
    }
    })
}
main()
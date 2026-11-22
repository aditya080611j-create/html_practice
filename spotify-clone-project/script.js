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
function playMusic(track){
    // let audio=new Audio("/spotify-clone-project/songs/"+track)
    currentsong.src="/spotify-clone-project/songs/"+track
    currentsong.play();
    play.src="pause.svg"
}
async function main() {
    let songs = await getsongs();
    console.log(songs);

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
}
main()
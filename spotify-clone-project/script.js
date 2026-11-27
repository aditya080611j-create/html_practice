let songs;
let currfolder;
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

let currentsong = new Audio();
async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songul = document.querySelector(".songlist").getElementsByTagName("ol")[0];
    songul.innerHTML="";
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
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
        })
    }
    )
    
}
function playMusic(track, pause = false) {
    // let audio=new Audio("/spotify-clone-project/songs/"+track)
    currentsong.src = `/${currfolder}/` + track
    if (!pause) {
        currentsong.play();
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00/00:00"
}
async function displayAlbums () {
let a = await fetch(`/spotify-clone-project/songs/`)
let response = await a.text();
let div = document.createElement("div")
div.innerHTML = response;

let anchors = div.getElementsByTagName("a")
let cardcontainer=document.querySelector(".cardcontainer");
let array = Array.from(anchors);
for (let index = 0; index < array.length; index++) {
    const e = array[index];
        if (e.href.includes("/songs/")) {
            const folder = e.href.split("/").slice(-2)[1];
            const a = await fetch(`/spotify-clone-project/songs/${folder}/info.json`);
            const albumInfo = await a.json();
            console.log(albumInfo);
            cardcontainer.innerHTML= cardcontainer.innerHTML+`<div data-folder="${albumInfo.data}" class="card">
                        <div class="play">
                        
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                        </svg>
                        </div>
                        <img src="/spotify-clone-project/songs/${folder}/cover.jpg">
                        <h2>${albumInfo.title}</h2>
                        <p>${albumInfo.description}</p>
                        </div>`
                        
                    }
                }
                Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            await getsongs(`/spotify-clone-project/songs/${item.currentTarget.dataset.folder}`)
        })
    })
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

    await getsongs("spotify-clone-project/songs/ncs");
    // console.log(songs);
    playMusic(songs[0], true)

    //display album
    displayAlbums ()

    
    // attach event listener to play pause 
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = "pause.svg"
        }
        else {
            currentsong.pause();
            play.src = "play.svg"
        }
    })

    //add event listener to songtime
    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime, currentsong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    })
    //add event listener to seekbar 
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%"
        currentsong.currentTime = ((currentsong.duration) * percent) / 100
    })
    //add event listner to previous
    previous.addEventListener("click", () => {
        console.log("prev");
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })
    next.addEventListener("click", () => {
        console.log("next");
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) { 
            playMusic(songs[index + 1])
        }
    })

}
main()
// ===== GitHub settings (already filled in for your repo) =====
const USER = "aditya080611j-create";
const REPO = "html_practice";
const BASE = "spotify-clone-project/songs";   // path of the songs folder inside the repo
const API = `https://api.github.com/repos/${USER}/${REPO}/contents`;
// =============================================================

let songs = [];
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

// folder is just the album name, e.g. "ncs"
async function getsongs(folder) {
    currfolder = folder;
    let res = await fetch(`${API}/${BASE}/${encodeURIComponent(folder)}`);
    let files = await res.json();
    songs = [];
    if (!Array.isArray(files)) {
        console.error("GitHub API error:", files);
        return;
    }
    for (const f of files) {
        if (f.name.toLowerCase().endsWith(".mp3")) {
            songs.push(f.name);
        }
    }

    let songul = document.querySelector(".songlist").getElementsByTagName("ol")[0];
    songul.innerHTML = "";
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
            playMusic(e.querySelector(".info").firstElementChild.textContent)
        })
    })
}

function playMusic(track, pause = false) {
    // relative path (no leading "/") so it works on GitHub Pages and on localhost
    currentsong.src = `songs/${encodeURIComponent(currfolder)}/${encodeURIComponent(track)}`;
    if (!pause) {
        currentsong.play();
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").textContent = track;
    document.querySelector(".songtime").innerHTML = "00:00/00:00"
}

async function displayAlbums() {
    let res = await fetch(`${API}/${BASE}`);
    let items = await res.json();
    if (!Array.isArray(items)) {
        console.error("GitHub API error:", items);
        return;
    }
    let cardcontainer = document.querySelector(".cardcontainer");
    for (const item of items) {
        if (item.type !== "dir") continue;
        const folder = item.name;
        const r = await fetch(`songs/${encodeURIComponent(folder)}/info.json`);
        if (!r.ok) continue;
        const albumInfo = await r.json();
        cardcontainer.innerHTML = cardcontainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                        </svg>
                        </div>
                        <img src="songs/${encodeURIComponent(folder)}/cover.jpg">
                        <h2>${albumInfo.title}</h2>
                        <p>${albumInfo.description}</p>
                        </div>`
    }
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            await getsongs(item.currentTarget.dataset.folder)
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

    await getsongs("ncs");
    if (songs.length) playMusic(songs[0], true)

    //display album
    displayAlbums()

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
        let index = songs.indexOf(decodeURIComponent(currentsong.src.split("/").slice(-1)[0]))
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })
    next.addEventListener("click", () => {
        let index = songs.indexOf(decodeURIComponent(currentsong.src.split("/").slice(-1)[0]))
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })
}
main()
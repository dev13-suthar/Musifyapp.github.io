console.log("helloo");
let mainSongIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("MasterPlay");
let ProgBar = document.getElementById("mybar");
let gif = document.getElementById("Play_gif");
let forward_btn = document.getElementById("frwd")
let backward_btn = document.getElementById("backwrd");
let songitem = Array.from(document.getElementsByClassName('songitem'));
let song_main_name = document.getElementById("song_name_bottom");
let mastersong_coverimg = document.getElementById("img_song");

// console.log(songitem);
let songs = [
    { songname: "on&on", filepath: "1.mp3", cover: "2.jpg" },
    { songname: "Basti ka Hasti", filepath: "2.mp3", cover: "4.jpg" },
    { songname: "Brown Munde", filepath: "3.mp3", cover: "5.jpg" },
    { songname: "Barishe -Anuv Jain", filepath: "4.mp3", cover: "6.jpg" },
    { songname: "unstopable", filepath: "5.mp3", cover: "2.jpg" },
]



songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})
// songs/
// audioElement.play();


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = "1";
        mastersong_coverimg.style.opacity = "1";
       
        
        // mastersong_coverimg.style.border = change_border_color();
        


    } else {
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = "0"
        mastersong_coverimg.style.opacity = "0";

    }
})

// audio bar upadates
audioElement.addEventListener("timeupdate", () => {
    // console.log("time updated");

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgBar.value = progress;
})



// song duration changes according to the seekbar;
ProgBar.addEventListener("change", () => {
    audioElement.currentTime = ProgBar.value * audioElement.duration / 100;
    
})

// // forward 3 secs;
// forward_btn.addEventListener("click", () => {
//     audioElement.currentTime = audioElement.currentTime + 7;
//     // console.log(audioElement.currentTime);
// })

// // backwards 3 secs 
// backward_btn.addEventListener("click", () => {
//     audioElement.currentTime = audioElement.currentTime - 7;
// })

const Allbtnplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener("click", (e) => {
        // console.log(e.target);
        Allbtnplay();
        let mainSongIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `${mainSongIndex+1}.mp3`;
        audioElement.currentTime = 0;
        song_main_name.innerText = songs[mainSongIndex].songname;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        console.log("played");
        mastersong_coverimg.src = songs[mainSongIndex].cover;
        mastersong_coverimg.style.opacity = "1"
        gif.style.opacity = "1";
        e.target.addEventListener("click",()=>{
            let plaupromise = audioElement.play();
            if (plaupromise !== undefined){
                plaupromise.then(()=>{
                    e.target.classList.add("fa-play")
                    e.target.classList.remove("fa-pause")
                    masterPlay.classList.remove("fa-pause-circle");
                    masterPlay.classList.add("fa-play-circle");
                    gif.style.opacity = "0";
                    mastersong_coverimg.style.opacity = "0"
                    audioElement.pause();
                })
                .catch(()=>{
                    e.target.add("fa-pause");
                    e.target.remove("fa-play");
                })
            }
              
            }

        )
        audioElement.play();
    })
    
    
})

document.getElementById("next").addEventListener("click",()=>{
    if (mainSongIndex>=4) {
        mainSongIndex = 0
    }else{
        mainSongIndex+=1;
    }
         audioElement.src = `${mainSongIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        song_main_name.innerText = songs[mainSongIndex].songname;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        mastersong_coverimg.src = songs[mainSongIndex].cover;
        mastersong_coverimg.style.opacity = "1"
        gif.style.opacity = "1";
})

document.getElementById("prev").addEventListener("click",()=>{
    if (mainSongIndex<=0) {
        mainSongIndex = 0
    }else{
        mainSongIndex-=1;
    }
    audioElement.src = `${mainSongIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        song_main_name.innerText = songs[mainSongIndex].songname;
        masterPlay.classList.remove("fa-play-circle");
        mastersong_coverimg.src = songs[mainSongIndex].cover;
        mastersong_coverimg.style.opacity = "1"
        gif.style.opacity = "1";
})

// individual play & pause icons
// masterPlay.addEventListener("click",()=>{
//     let song1=document.getElementById("0");
//     // console.log(song1);
//     song1.classList.add("fa-pause");
//     song1.classList.remove("fa-play");

// })
// console.log(Array.from(document.getElementsByClassName('songitemplay')));
// console.log(typeof(Array.from(document.getElementsByClassName('songitemplay'))));

let all_songs_lists = Array.from(document.getElementsByClassName('songitemplay'));



setInterval(()=>{
    
    if (ProgBar.value==100) {
        mainSongIndex+=1;
        audioElement.src = `${mainSongIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        song_main_name.innerText = songs[mainSongIndex].songname;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = "1";
        mastersong_coverimg.src = songs[mainSongIndex].cover;
        if(mainSongIndex==6){
            mainSongIndex=0;
        }
    }
  
},2000)

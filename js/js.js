let audio2 = document.querySelector('audio')
let img2 = document.querySelector('img')
let h1el = document.querySelector('h1')
let plast = document.querySelector('#pLastname')
let total_time = document.querySelector('.total-time')
let last_time = document.querySelector('.last-time')

let playmu = false

let Musicsrc =[

   'audio/Jamie Duffy - Solas.mp3',
   'audio/ludovico_einaudi_experience 128.mp3',
   'audio/syml_wheres_my_love_alternate_version.mp3'
   
]
let musicinfo = [
   {src : 'audio/Jamie Duffy - Solas.mp3' , img : 'Image/Jamie-Duffy-Solas-560x560.webp' , Firstname :'Jamie Duffy' , lastname : 'Solas'},
   {src : 'audio/ludovico_einaudi_experience 128.mp3' , img : 'Image/ludovico_einaudi_experience.jpg' , Firstname :'ludovico einaudi' , lastname : 'experience'},
   {src : 'audio/syml_wheres_my_love_alternate_version.mp3' , img : 'Image/syml_wheres_my_love_alternate_version.jpg' , Firstname :'SYML' , lastname : 'wheres_my_love'}
]
let audioindex = 0

function playmusic(){
   playmu = true
   total_time.innerHTML = Math.floor(audio2.duration / 60)

   last_time.innerHTML = audio2.currentTime

   audio2.play()
 
}

function playpausemusic(){
   if(playmu){
      pausemusic()
   }else{
      playmusic()
   }
}
 function pausemusic(){
   playmu = false
    audio2.pause()
 }

function Nextmusic(){
   audioindex++

   if(audioindex > Musicsrc.length -1){
      audioindex = 0
   }  


   audio2.setAttribute('src' , musicinfo[audioindex].src) 
   img2.setAttribute('src' ,musicinfo[audioindex].img )
   h1el.innerHTML = musicinfo[audioindex].Firstname
   plast.innerHTML = musicinfo[audioindex].lastname
   playmusic()
}

function Previousumusic(){
   audioindex--

   if(audioindex < 0){
      audioindex = 2
   }
   audio2.setAttribute('src' , Musicsrc[audioindex])
   img2.setAttribute('src' ,musicinfo[audioindex].img )
   h1el.innerHTML = musicinfo[audioindex].Firstname
   plast.innerHTML = musicinfo[audioindex].lastname
   playmusic()
}

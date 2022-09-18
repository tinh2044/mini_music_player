import { listAlbums, listMusics } from './data.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var  dataOfAccount = JSON.parse(localStorage.getItem('MINI_MUSIC_PLAYER')) || {
    idSong: 1,
    listLikes: [],
    action: {
        isRepeat: false,
        isRepeat_1: false,
        isRandom: false
    }
}
// localStorage.removeItem('MINI_MUSIC_PLAYER')
// Handle Render Albums
function renderAlbums() {
    var htmls =  listAlbums.map( (album,index) => {
        return `
            <li data-type="${album.type}" data-index="${index}" class="container__albums-item ">
                <img src="${album.img}" alt=""
                  class="container__albums-item-img" />
            </li>

        `

    })
    $('.container__albums-list').innerHTML = htmls.join('')
    $('.container__albums-quantity').innerHTML = `${listAlbums.length} albums`
    slideAlbums()

}



// Handle Render List Songs 
function renderSongs(option, listSongAlbum) {
    var listSongs
    if (option != 'all') {
    listSongs = listSongAlbum
    }
    else {
        listSongs = listMusics
    }
    var htmls = listSongs.map( (song,index) => 
    `
    <li data-index="${index}" data-type="${song.type}" class="container__left-item ${index === 0 ? 'playing' : ''}">
        <img src="${song.image}" alt="" class="container__left-item-img">
        <p class="container__left-item-index">${index + 1}</p>
        <div class="container__left-item-desc">
        <p class="container__left-item-name">${song.name}</p>
        <p class="container__left-item-artist">
                <i class="bi bi-dash hide-on-mobile" style=" margin-right:4px;"></i>
                ${song.singer}
            </p>
        </div>
        <div id="${song.id}" class=" container__left-item-like">
          <i class="bi bi-heart" style="color:#000;display:block"></i>
          <i class="bi bi-heart-fill" style="color:red;display:none;"></i>
        </div>
    </li>

    `)
    $('.container__left-list-song').innerHTML = htmls.join('')
    $('.container__left-quantity-song').textContent= `${listSongs.length > 1 && listSongs.length + ' songs' || listSongs.length + ' song'}`   

    handlePlayMusic(option,listSongs)  

}
function handlePlayMusic(option,listSongs) {
    const audio = $('#audio')
    const progressBar = $('.container__player-progress-bar')
    const playPauseIcon =  $('.container__player-action-play')
    const nextBtn = $('.container__player-action-next')
    const prevBtn = $('.container__player-action-prev')
    const repeatOrRandom = $('.container__player-action-repeat-random') 
    const volBar = $('.container__player-vol-bar')
    const cd = $('.container__player-img')
    const listItemSongs = Array.from($$('.container__left-item'))
    var currentIndex = 0
    var isPlay = false 
    var isRepeat =  dataOfAccount.action.isRepeat || false
    var isRepeat_1 =  dataOfAccount.action.isRepeat_1 || false
    var isRandom = dataOfAccount.action.isRandom || false
    var currentVol = audio.volume

    function loadCurrentSong() {
        var song = listSongs[currentIndex]
        dataOfAccount.idSong  = song.id
        localStorage.setItem("MINI_MUSIC_PLAYER", JSON.stringify(dataOfAccount))
        cd.src = `${song.image}`
        $('.container__player-name').textContent = `${song.name}`
        audio.src = `./assets/list-music/${song.path}`
        $('.container__player-artists').textContent = `${song.singer}`
        audio.onloadedmetadata = () => {
            var durationTime = $('.container__player-progress-time-duration')
            var timeSec = parseInt(audio.duration % 60)
            if (timeSec < 10) {
                timeSec = `0${timeSec}`
            }
            var timeMin = parseInt(audio.duration / 60)
            durationTime.textContent = `${timeMin}:${timeSec} ` 

        }
        ChangePlayingSong()
        
    }
    var cdAnimate = cd.animate([
        {
            transform: 'rotate(108000deg)',
        },
    ],{
        duration: 3000000,
        iterations : Infinity
    })
    cdAnimate.pause()
    function handleEvents() {
        audio.onplay = () => {
            songPlay()
            playPauseIcon.classList.remove('bi-play-fill')
            playPauseIcon.classList.add('bi-pause')
            isPlay = true
            cdAnimate.play()
        }
        audio.ontimeupdate = () => {
            songPlay()
        }
        audio.onended = () => {
            if( isRepeat) {
                audio.currentTime = 0
                audio.play()
            } 
            else {
                if (isRepeat_1) {
                    repeatOrRandom.innerHTML = `<i class="container__player-action-repeat bi bi-repeat"></i>`
                    repeatOrRandom.setAttribute('type', 0)
                    isRepeat_1 = !isRepeat_1
                    audio.currentTime = 0
                    audio.play()
                } else {
                    
                    if (isRandom) {
                        handleRandom()
                        audio.play()
                    } else {
                        nextBtn.click()
                    }
                } 
            }

        }
        
        playPauseIcon.onclick = () => {
            HandlePlayPause()
        }
        nextBtn.onclick = () => {
            if (isRandom) {
                handleRandom()
            } else {
                handleNext()
            }
            audio.play()
        }
        prevBtn.onclick = () => {
            
            if (isRandom) {
                handleRandom()
            } else {
                handlePrev()
            }
            audio.play()
        }
        repeatOrRandom.onclick = () => {
        var type = parseInt(repeatOrRandom.getAttribute('type')) 
            checkRepeatOrRandom(type)
        }
        progressBar.oninput = () => { 
            handleProgressBar()
        }
        volBar.oninput = (e) => {
            changeVolume(e.target)

        }

    }
    function checkRepeatOrRandom(type) { 
            switch (type) {
                case 0:
                    repeatOrRandom.innerHTML = `<i class="active container__player-action-repeat bi bi-repeat"></i>`
                    isRepeat = true
                    isRepeat_1 = false
                    isRandom = false
                    break
                case 1:
                    repeatOrRandom.innerHTML = `<i class="active container__player-action-repeat bi bi-repeat-1"></i>`
                    isRepeat = false
                    isRepeat_1 = true
                    isRandom = false
                    break
                case 2:
                    repeatOrRandom.innerHTML = `<i class="active container__player-action-repeat bi bi-shuffle"></i>`
                    isRepeat = false
                    isRepeat_1 = false
                    isRandom = true
                    break
                case 3:
                    repeatOrRandom.innerHTML = `<i class="container__player-action-repeat bi bi-repeat"></i>`
                    isRepeat = false
                    isRandom = false
                    isRepeat_1 = false
                    break
            }
            dataOfAccount.action = {
                isRepeat: isRepeat,
                isRepeat_1: isRepeat_1,
                isRandom: isRandom
            }
            localStorage.setItem('MINI_MUSIC_PLAYER',JSON.stringify(dataOfAccount))
            if ( type === 3) {
                type = 0
            } else {
                type += 1
            }
            repeatOrRandom.setAttribute('type', type)
    }
    function changeVolume(element) { 
        var present = element.value
        audio.volume = present / 100
    }
    function handleRandom() {
        isRandom = true
        var checkIndex = true
        var index = Math.floor(Math.random() * listSongs.length)
        // checkIndex = (currentIndex -1 == index || currentIndex +1 == index)
        while  ((index == currentIndex)) {
            index = Math.floor(Math.random() * listSongs.length)
            // checkIndex = (currentIndex -1 == index || currentIndex +1 == index)
        }        
        currentIndex = index
        ChangePlayingSong()
        loadCurrentSong()

    }
    function handleNext() {
        if ( currentIndex < listSongs.length -1) {
            currentIndex++
            
        } else {
            currentIndex = 0
        }
        ChangePlayingSong()
        loadCurrentSong()
    }
    function handlePrev() {
        if ( currentIndex > 1) {
            currentIndex--
            
        } else {
            currentIndex = listSongs.length - 1
        }
        ChangePlayingSong()
        loadCurrentSong()
        audio.play()
    }
    // Handle When Click Play Pause
    function HandlePlayPause() {
        if (isPlay) {
            playPauseIcon.classList.add('bi-play-fill')
            audio.pause()
            cdAnimate.pause()
            playPauseIcon.classList.remove('bi-pause')
            isPlay = !isPlay
            $('.container__right-heading').textContent = 'STOP PLAYING'

        } else {
            audio.play()
            cdAnimate.play()
            playPauseIcon.classList.remove('bi-play-fill')
            playPauseIcon.classList.add('bi-pause')
            $('.container__right-heading').textContent = 'NOW PLAYING'
            isPlay = !isPlay

        }
    }
    // When Song Play
    function songPlay() {
        var currentTime = $('.container__player-progress-time-update')
        // Show Time
        var timeSec
        var timeMin
        var timeAudio = audio.currentTime
        if (timeAudio) {
            var timeSec = parseInt(timeAudio % 60)
            if (timeSec < 10) {
                timeSec = `0${timeSec}`
            }
           var timeMin = parseInt(timeAudio / 60)
        } else {
            timeSec = '00'
            timeMin = 0
        }
        currentTime.textContent = `${timeMin}:${timeSec} `
        // Progress Bar
        if (timeAudio) {    
            var present = timeAudio * 100 / audio.duration
        } else {
            present = 0
        }
        progressBar.value = present 

    }
    // Chang Progress Bar
    function handleProgressBar() {
        var currentTime = audio.duration * progressBar.value / 100
        audio.volume = 0
        audio.currentTime = currentTime
        progressBar.onchange = () => {
            audio.volume = currentVol
            playPauseIcon.classList.remove('bi-play-fill')
            playPauseIcon.classList.add('bi-pause')
            audio.play()
        }
    }

     // When Click Item List Song 
     function ClickItemSong() {
        listItemSongs.forEach(function (itemSong) {
            itemSong.onclick = function (event) {
                var item = event.target.closest('.container__left-item:not(.playing)')
                if (item) {
                    var index = item.dataset.index
                    currentIndex = index
                    loadCurrentSong()
                    ChangePlayingSong()
                    audio.play()
                }
            }
        })
    }
    

    function ChangePlayingSong() {
        listItemSongs.forEach(function(item) {
            item.classList.remove('playing')
        })
        listItemSongs[currentIndex].classList.add('playing')
        setTimeout(function() {
            $('.container__left-item.playing').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })

        } ,100)

    }
    function clickAlbumItem() {
        var albumItem = Array.from($$('.container__albums-item'))
        albumItem.forEach( item => {

            item.onclick = function() {
                var type = this.dataset.type
                var listSongs
                if (type != 'all') {
                    listSongs = Array.from(listMusics).filter( (itemMusic) => itemMusic.type === type)
                }  else {
                    listSongs = Array.from(listMusics)
                } 
                var index = this.dataset.index
                $('.container__left-heading').textContent = listAlbums[index].name
                dataOfAccount.albums = type 
                localStorage.setItem('MINI_MUSIC_PLAYER', dataOfAccount)
                cdAnimate.pause()
                renderSongs(type,listSongs)
                
                
            }
        })
    }
    
    function handleLike() {
        const likeBtns = Array.from($$('.container__left-item-like'))
            var listLikes = dataOfAccount.listLikes
            listSongs.forEach(function (song) {
                if(listLikes.includes(song.id)) {
                    $(`div[id="${song.id}"]`).classList.add('liked')
                }
            })
        
    
        likeBtns.forEach( function (likeBtn,index) {
            likeBtn.onclick = function (e) {
                e.stopPropagation();
                var classLiked = this.classList.contains('liked')
                var id  = parseInt(this.id)
                if(classLiked) {
                    this.classList.remove('liked');
                    index = listLikes.indexOf(id);
                    listLikes.splice(index, 1)
                } else {
                    this.classList.add('liked');
                    listLikes.push(id)
                }
                dataOfAccount.listLikes = listLikes
               localStorage.setItem('MINI_MUSIC_PLAYER', JSON.stringify(dataOfAccount))
            }
        })
    }
    
    if (option === '') {
        var id = dataOfAccount.idSong
        currentIndex = id -1
    }
    if (isRepeat) {
        checkRepeatOrRandom(0)
    } else {
        if (isRepeat_1) {
        checkRepeatOrRandom(1)

        } else {
            if (isRandom) {
                checkRepeatOrRandom(2)
            }
        }
    }
    clickAlbumItem()
    loadCurrentSong()
    handleEvents()
    ClickItemSong() 
    handleLike() 
    if (option && option) {
        currentIndex = 0
        isPlay = false
        HandlePlayPause()
        option = ''
    } 
}






    // Handle When Click Navbar Item
    function clickNavbarItem( ) {
        const navbarItems = $$('.sidebar__navbar-item')
        Array.from(navbarItems).forEach( function(navbarItem) {
            navbarItem.onclick = function() {
                Array.from(navbarItems).forEach( x => x.classList.remove('active') )
                this.classList.add('active')
            }
        } )
    }
    
    // Handle Vol Bar
    function volBar() {
        var volIcon =$('.container__player-action-change-vol')
        var volBar = $('.container__player-vol-bar')
        volIcon.onclick = function() {
            volBar.classList.toggle('d-block')
        }
    }
    
    // Handle Icon SideBar On Tablet And Mobile 
    function handleSidebar() {
        var openIcon = $('.header__sidebar-ion')
        var closeIcon = $('.sidebar-icon')
        var sidebar = $('.sidebar')
        var overlay = $(".overlay")
        openIcon.onclick = function() {

            sidebar.classList.toggle('handle-sidebar')
            overlay.style.display = 'block'
            overlay.style.opacity = 1
        }
        closeIcon.onclick = function() {
            sidebar.classList.toggle('handle-sidebar')
            overlay.style ={
                display: 'none',
                opacity: 0
            }

        }
        overlay.onclick = function() {
            sidebar.classList.toggle('handle-sidebar')
            overlay.style = {
                display: 'none',
                opacity: 0
            }
        }
    }
    // Handle Albums
    function slideAlbums() {
        const albumsWarp = $('.container__albums-list')
        const albumsItem = $('.container__albums-item')
        const nextBtn = $('.container__albums-controls-next')
        const prevBtn = $('.container__albums-controls-prev')
        nextBtn.onclick = function() {
            const scrollAlbumWarp = albumsWarp.scrollTop
            albumsWarp.scrollTop = scrollAlbumWarp + albumsItem.offsetHeight*2 +32

        }
        prevBtn.onclick = function() {
            const scrollAlbumWarp = albumsWarp.scrollTop
            albumsWarp.scrollTop = scrollAlbumWarp - (albumsItem.offsetHeight*2 +32)

        }
    }
    // Handle When Click Favorite song
    function handleFavoriteSong() {
        var listLikes = dataOfAccount.listLikes || []
        $('#favorite').onclick = function() {
            $('.container__left-heading').textContent = 'Favorite Songs'
            if (listLikes.length > 0) {
                var listFavorite = listMusics.filter(function(item) { 
                    return listLikes.includes(item.id)
                })
                renderSongs('favorite', listFavorite)
            } else {
                renderSongs('favorite', [])
            }
            $('.sidebar').classList.remove('handle-sidebar')
            $('.overlay').style = {
                display: 'none',
                opacity: 0
            }
            
        }
    }
function start() {

    renderAlbums()
    renderSongs('',listMusics, [])
    clickNavbarItem()
    volBar()
    handleSidebar()
    handleFavoriteSong()

}
start()
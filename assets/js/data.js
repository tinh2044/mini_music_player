const listAlbums = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXdvOi6zKX7RklsaNthGWEuOXpighmVNl9g&usqp=CAU',
    name: 'ALL',
    type: 'all'
  },
  {
    img: 'https://i2.wp.com/doanhnhanonline.com.vn/wp-content/uploads/2021/11/Con-duong-am-nhac-cua-Alan-walker-bat-dau-tu-khi-nao.jpg',
    name: 'ALAN WALKER',
    type: 'alanWalker'
  },
  {
    img: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/04/12/7/2/9/3/1618213960670_300.jpg',
    name: 'NGHE NHIỀU NHẤT',
    type: 'much'
  },
  {
    img: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/06/17/0/1/f/3/1655457107430_300.jpg',
    name: 'TOP TRENDING',
    type: 'hot'
  },
  {
    img: 'https://pic-bstarstatic.akamaized.net/ugc/cebe4f136ba91ebbf528bb8ae6c18bd701aaa49a.jpg',
    name: 'EDM',
    type: 'edm'
  },
  {
    img: 'https://cdn.tgdd.vn/Files/2022/07/29/1451210/tiktok-music_1280x720-800-resize.png',
    name: 'TIK TOK',
    type: 'tiktok'
  },
  {
    img: 'https://itube.vn/upload/photos/2020/10/RQ2SPTyNFpW9VGUalSth_02_b9aa77147003feb9f2d6eb3d1bacd489_image.jpg',
    name: 'CHILL',
    type: 'chill'
  },
  {
    img: 'http://3.bp.blogspot.com/-6QNAZECJ9Bo/Vgq8L8O-cWI/AAAAAAAAAeU/6reSAmL_W-U/s1600/nhung-bai-hat-tao-dong-luc-khi-that-bai-va-buon-chan.jpg',
    name: 'MOTIVATION',
    type: 'strong'
  },
  {
    img: 'https://i.scdn.co/image/ab67706c0000bebbcd0fbf5b5cabba4e547a2fac',
    name: 'LOVE SONG',
    type: 'love'
  }
]
const listMusics = [
  {
    name: 'A Little Love',
    singer: 'Fiona Fung',
    path: "A Little Love.mp3",
    image: 'https://i.ytimg.com/vi/oXmspz9yQS8/maxresdefault.jpg',
    type: 'love',
    id: 1
  },
  {
    name: 'ABCDEFU',
    singer: 'Gay Ly',
    path: "abcdefu.mp3",
    image: 'https://wallpaperaccess.com/full/8260728.jpg',
    type: 'tiktok',
    id:2
  },
  {
    name: 'All About Him',
    singer: 'Auburn',
    path: "All About Him.mp3",
    image: 'https://i.ytimg.com/vi/rsvtY4k6l9I/maxresdefault.jpg',
    type: 'love',
    id:3
  },
  {
    name: 'All Fall Down',
    singer: 'Alan Walker And Noah Cyrus',
    path: "AllFallDown.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRX4x6f0Ci3CwT7aKGNZ1eG0fR8QIV1ee_g&usqp=CAU',
    type: 'alanWalker',
    id:4
  },
  {
    name: 'Alone',
    singer: ' Alan Walker',
    path: "alone.3gp",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaBU1rEqqeAwWChv8NO3bg4ZuVwAt-TsKFw&usqp=CAU',
    type: 'alanWalker',
    id:5
  },
  {
    name: 'Are You Lonely',
    singer: 'Alan Walker And Steve Aoki',
    path: "areYouLonely.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNMGO7oNoHQflpyfrYIWUKGkcKHsbzUIi1A&usqp=CAU',
    type: 'alanWalker',
    id:6
  },
  {
    name: 'At My Worst',
    singer: 'Pink Sweat$',
    path: "atMyWorst.mp3",
    image: 'https://lamhoangmedia.com/wp-content/uploads/2021/04/at-my-worst-300x169.jpeg',
    type: 'chill',
    id:7
  },
  {
    name: 'Bad Liar ',
    singer: 'Imagine Dragons',
    path: "badLiar.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Q1d2Zdr8TKmjvYahnRHjAgvS09aoYeRuMw&usqp=CAU',
    type: 'strong',
    id:8
  },
  {
    name: 'Believer',
    singer: 'Imagine Dragons',
    path: "Believer.mp3",
    image: 'https://i.ytimg.com/vi/W0DM5lcj6mw/maxresdefault.jpg',
    type: 'edm',
    id:9
  },
  {
    name: 'Body Back',
    singer: 'Gryffin',
    path: "bodyBack.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlh4Mrltl7zAbog99jFcs9U1cEgXqK5nG5Q&usqp=CAU',
    type: 'edm',
    id:10
  },
  {
    name: 'Breathe',
    singer: 'Lee Hi',
    path: "Breathe.mp3",
    image: 'https://tuhocanhngu.com/wp-content/uploads/2021/12/vai-luu-y-khi-dich-tu-breathe-trong-tieng-anh.jpg',
    type: 'chill',
    id:11
  },
  {
    name: 'Centuries',
    singer: 'Fall Out Boy',
    path: "Centuries.mp3",
    image: 'https://i.scdn.co/image/ab67616d0000b27350bd47cf6d44bddcd546a951',
    type: 'strong',
    id:12
  },
  {
    name: 'Darkside',
    singer: 'Alan Walker Au-Ra And Tomine Harket',
    path: "Darkside.mp3",
    image: 'https://i.pinimg.com/originals/b9/11/8e/b9118e00c70c256ef1bd5df5918c1eee.jpg',
    type: 'alanWalker',
    id:13
  },
  {
    name: 'Diamond Heart',
    singer: ' Alan Walker And Sophia Somajo',
    path: "DiamondHeart.mp3",
    image: 'https://images.genius.com/d5d7beb925d2d88a48fc1ba6db48ad0a.1000x1000x1.jpg',
    type: 'alanWalker',
    id:14
  },
  {
    name: 'Different World',
    singer: 'Alan Walker K-391 And Sofia Carson feat',
    path: "differentWorld.webm",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCL8dXfyS8rq9R8gtldO959H13cz8nTf54lg&usqp=CAU',
    type: 'alanWalker',
    id:15
  },

  {
    name: 'Drive My Car',
    singer: 'Dream',
    path: "Drive My Car.mp3",
    image: 'https://lyrics-hot.com/wp-content/uploads/2021/03/9cb73f8d6d25437de31bcccf60d71af8_1492504627.jpg',
    type: 'chill',
    id:16
  },
  {
    name: 'East Of Eden',
    singer: 'Zella Day',
    path: "EastOfEden.mp3",
    image: 'https://i1.sndcdn.com/artworks-WZu6vPZBqRL1-0-t500x500.png',
    type: 'edm',
    id:17
  },
  {
    name: 'End Of The Night',
    singer: 'Danny Avila      ',
    path: "End Of The Night.mp3",
    image: 'https://trangspa.vn/wp-content/uploads/2021/12/Loi-bai-hat-End-Of-The-Night.jpg',
    type: 'chill',
    id:18
  },
  {
    name: 'Enemy',
    singer: 'Imagine Dragons & J.I.D',
    path: "Enemy.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_00oBtvmh7cyNKiy9A-7Iqb_lgYDSpEggg&usqp=CAU',
    type: 'edm',
    id:19
  },
  {
    name: 'Faded',
    singer: 'Alan Walker',
    path: "Faded.mp3",
    image: 'https://i1.sndcdn.com/artworks-000520746324-z9pvad-t500x500.jpg',
    type: 'AlanWalker',
    id:20
  },

  {
    name: 'Fractures ',
    singer: ' Illenium',
    path: "Fractures.mp3",
    image: 'https://i.ytimg.com/vi/PieM2YAaIvY/maxresdefault.jpg',
    type: 'chill',
    id:21
  },
  {
    name: 'Girls Like You',
    singer: 'Maroon 5',
    path: "Girls Like You.mp3",
    image: 'https://theharmonica.vn/wp-content/uploads/2019/02/girlslikeyou.jpg',
    type: 'love',
    id:22
  },
  {
    name: 'Hall Of Fame',
    singer: 'The Script',
    path: "Hall Of Fame.mp3",
    image: 'https://i.ytimg.com/vi/1yBc5aDEk5o/maxresdefault.jpg',
    type: 'strong',
    id:23
  },
  {
    name: 'Hero',
    singer: 'Cash Cash',
    path: "Hero.mp3",
    image: 'https://pic-bstarstatic.akamaized.net/ugc/b8367381ee15f761d562804c24230ada370489d0.jpg',
    type: 'chill',
    id:24
  },
  {
    name: 'Hey, Soul Sister',
    singer: 'Train',
    path: "Hey, Soul Sister.mp3",
    image: 'https://i.ytimg.com/vi/JloUN9j9cJ8/maxresdefault.jpg',
    type: 'chill',
    id:25
  },
  {
    name: 'I Do - 911',
    singer: '911',
    path: "I Do - 911.mp3",
    image: 'https://i.ytimg.com/vi/XyEz7KeJt-4/maxresdefault.jpg',
    type: 'love',
    id:26
  },
  {
    name: 'I Really Like You',
    singer: 'Carly Rae Jepsen',
    path: "I Really Like You.mp3",
    image: 'https://i.ytimg.com/vi/c4t1pay38jI/maxresdefault.jpg',
    type: 'much',
    id:27
  },
  {
    name: 'Ignite',
    singer: 'K-391 & Alan Walker',
    path: "Ignite.mp3",
    image: 'https://i.ytimg.com/vi/zrwTYozyzYA/maxresdefault.jpg',
    type: 'alanWalker',
    id:28
  },
  {
    name: 'Legends Never Die',
    singer: ' Against The Current',
    path: "Legends Never Die.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCa7ZZuEoI2q6wUM2IOwUuK4yEEPuUjWy9A&usqp=CAU',
    type: 'strong',
    id:28
  },
  {
    name: 'Leyla',
    singer: ' Mesto',
    path: "Leyla.mp3",
    image: 'https://home.voca.vn/assets/img/upload/images/Leyla.jpg',
    type: 'chill',
    id:29
  },
  {
    name: 'Lily',
    singer: 'Alan Walker và K-391',
    path: "Lily.mp3",
    image: 'https://i.ytimg.com/vi/lvsvj00vGvo/maxresdefault.jpg',
    type: 'alanWalker',
    id:30
  },
  {
    name: 'Lost Control',
    singer: 'Alan Walker & Sorana',
    path: "Lost Control.mp3",
    image: 'https://i1.sndcdn.com/artworks-000506344518-77kb8s-t500x500.jpg',
    type: 'alanWalker',
    id:31
  },
  {
    name: 'Love Story',
    singer: 'Taylor Swift',
    path: "Love Story.mp3",
    image: 'https://lamhoangmedia.com/wp-content/uploads/2021/04/Love-Story.jpeg',
    type: 'love',
    id:32
  },
  {
    name: 'Meant To Be  Arc North ',
    singer: 'Krista Marina & Arc North',
    path: "Meant To Be  Arc North.mp3",
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/09/05/2/6/c/4/1567655910932_640.jpg',
    type: 'hot',
    id:33
  },
  {
    name: 'Mine',
    singer: 'Taylor Swift',
    path: "Mine.mp3",
    image: 'https://i.ytimg.com/vi/QeUFmGLhI_s/maxresdefault.jpg',
    type: 'edm',
    id:34
  },
  {
    name: 'Monody',
    singer: ' TheFatRat',
    path: "Monody.mp3",
    image: 'https://i1.sndcdn.com/artworks-000195426897-73lfiz-t500x500.jpg',
    type: 'edm',
    id:35
  },
  {
    name: 'Monsters',
    singer: 'Katie Sky',
    path: "Monsters.mp3",
    image: 'https://i.ytimg.com/vi/FmQutmPBfq0/maxresdefault.jpg',
    type: 'chill',
    id:36
  },
  {
    name: 'Mood',
    singer: '24kGoldn',
    path: "Mood.mp3",
    image: 'https://www.studytienganh.vn/upload/2021/04/97758.jpg',
    type: 'tiktok',
    id:37
  },
  {
    name: 'On My Way',
    singer: 'Alan Walker & Sabrina Carpenter',
    path: "On My Way.mp3",
    image: 'https://i1.sndcdn.com/artworks-000523641915-lo2qzf-t500x500.jpg',
    type: 'alanWalker',
    id:38
  },
  {
    name: 'Once Upon A Time',
    singer: ' Max Oazo',
    path: "Once Upon A Time.mp3",
    image: 'https://i.ytimg.com/vi/4CuBR9VGDG8/maxresdefault.jpg',
    type: 'tiktok',
    id:39
  },
  {
    name: 'Oops',
    singer: 'Lil Wayne & Yung Gravy',
    path: "Oops.mp3",
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVvNx3TSKoyavRm6U-4og-lBHFEDDcMLE1LG6EqBZ6taP0gSczjb5cEunX9U0Sx8pV16t2bF86OQRXDcK-CaJVDstaP5FcsYDrOgemqVnYAj0D40TkvmkwBKRJr4ulL6N26t71HWTQ-64YtttVmHSn_6TdM64OSX86W0Ivv6-kNs5PQMB9BAy3Y7CKbw/s1080/20220830_103943_0000.png',
    type: 'love',
    id:40
  },
  {
    name: 'Reality',
    singer: 'Lost Frequencies      ',
    path: "Reality.mp3",
    image: 'https://i0.wp.com/crownlyric.com/wp-content/uploads/2022/08/JAUZ-Ship-Wrek-Reality-Lyrics.webp?fit=1280%2C720&ssl=1',
    type: 'tiktok',
    id:41
  },
  {
    name: 'Runnin Away',
    singer: 'Sly & The Family Stone',
    path: "Runnin Away.mp3",
    image: 'https://i.ytimg.com/vi/NH5c6iY_mYA/maxresdefault.jpg',
    type: 'tiktok',
    id:42
  },
  {
    name: 'Savannah',
    singer: 'Diviners',
    path: "Savannah.mp3",
    image: 'https://i.ytimg.com/vi/XHJ1j500lqQ/maxresdefault.jpg',
    type: 'tiktok',
    id:43
  },
  {
    name: 'Save Me',
    singer: 'Dream',
    path: "Save Me.mp3",
    image: 'https://i.ytimg.com/vi/Dw2FZBSO6dE/maxresdefault.jpg',
    type: 'chill',
    id:44
  },
  {
    name: 'Shape of you',
    singer: 'Ed Sheeran',
    path: "Shape of you.mp3",
    image: 'https://lamhoangmedia.com/wp-content/uploads/2021/04/Shape-of-You-.jpeg',
    type: 'tiktok',
    id:45
  },
  {
    name: 'Sign',
    singer: 'Dream',
    path: "Sign.mp3",
    image: 'https://i.ytimg.com/vi/y50Y5IT3WBE/maxresdefault.jpg',
    type: 'edm',
    id:46
  },
  {
    name: 'Sing Me To Sleep',
    singer: 'Alan Walker      ',
    path: "Sing Me To Sleep.mp3",
    image: 'https://i1.sndcdn.com/artworks-000208554311-mi95hd-t500x500.jpg',
    type: 'alanWalker',
    id:47
  },
  {
    name: 'Sold Out',
    singer: 'Hawk Nelson',
    path: "Sold Out.mp3",
    image: 'https://i.ytimg.com/vi/GspDybPhOeY/maxresdefault.jpg',
    type: 'strong',
    id:48
  },
  {
    name: 'Someone You Loved',
    singer: ' Lewis Capaldi',
    path: "Someone You Loved.mp3",
    image: 'https://i.ytimg.com/vi/YUUmiflm7AM/maxresdefault.jpg',
    type: 'love',
    id:49
  },
  {
    name: 'Something Just Like This',
    singer: 'Coldplay & The Chainsmokers',
    path: "Something Just Like This.mp3",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzNe5CjuMi1StsBv3UOOHtJ19-UoBhZG6eyMuKKcfC_CcjCOGWDI5SqURUgXHm8uhXJI&usqp=CAU',
    type: 'chill',
    id:50
  },
  {
    name: 'Stereo Hearts',
    singer: 'Gym Class Heroes',
    path: "Stereo Hearts.mp3",
    image: 'https://i.scdn.co/image/ab67616d0000b2739bc8c7e741fcf8373079ca7d',
    type: 'tiktok',
    id:51
  },
  {
    name: 'Strongest',
    singer: 'Ina Wroldsen',
    path: "Strongest.mp3",
    image: 'https://i.ytimg.com/vi/iVMMHeu0zis/maxresdefault.jpg',
    type: 'alanWalker',
    id:52
  },
  {
    name: 'Summer Love',
    singer: 'Dream',
    path: "Summer Love.mp3",
    image: 'https://i.ytimg.com/vi/-rjhH3SMQ-0/maxresdefault.jpg',
    type: 'tiktok',
    id:53
  },
  {
    name: 'That Girl',
    singer: 'Olly Murs',
    path: "That Girl.mp3",
    image: 'https://i.ytimg.com/vi/f_LgWgzCPnQ/maxresdefault.jpg',
    type: 'chill',
    id:54
  },
  {
    name: 'The Nights',
    singer: 'Avicii      ',
    path: "The Nights.mp3",
    image: 'https://i.ytimg.com/vi/2S0QhGGO1gQ/maxresdefault.jpg',
    type: 'strong',
    id:56
  },
  {
    name: 'The Ocean',
    singer: 'Mike Perry',
    path: "The Ocean.mp3",
    image: 'https://i.ytimg.com/vi/mGQFZxIuURE/maxresdefault.jpg',
    type: 'tiktok',
    id:57
  },
  {
    name: 'The Spectre',
    singer: ' Alan Walker',
    path: "The Spectre.mp3",
    image: 'https://upload.wikimedia.org/wikipedia/vi/c/c3/Alan_Walker_The_Spectre.jpg',
    type: 'alanWalker',
    id:58
  },
  {
    name: 'The Way I Still Love You',
    singer: 'Reynard Silva',
    path: "The Way I Still Love You.mp3",
    image: 'https://i.ytimg.com/vi/MJDSye06A0A/maxresdefault.jpg',
    type: 'love',
    id:59
  },
  {
    name: 'This Is My Kingdom Come',
    singer: ' Demons Running',
    path: "This Is My Kingdom Come.mp3",
    image: 'https://i.ytimg.com/vi/p1wIHF8dNQ8/maxresdefault.jpg',
    type: 'tiktok',
    id:60
  },
  {
    name: 'Tired',
    singer: 'Alan Walker',
    path: "Tired.mp3",
    image: 'https://i.ytimg.com/vi/YnaEoCY_vzc/maxresdefault.jpg',
    type: 'alanWalker',
    id:61
  },
  {
    name: 'Umbrella',
    singer: ' Rihanna',
    path: "Umbrella.mp3",
    image: 'https://i.ytimg.com/vi/oVGRTQDqhs8/maxresdefault.jpg',
    type: 'tiktok',
    id:62
  },
  {
    name: 'Unstoppable',
    singer: 'Sia',
    path: "Unstoppable.mp3",
    image: 'https://i.ytimg.com/vi/h3h035Eyz5A/maxresdefault.jpg',
    type: 'edm',
    id:63
  },
  {
    name: 'Until You',
    singer: 'Shayne Ward',
    path: "Until You.mp3",
    image: 'https://i.ytimg.com/vi/3HbqAPore6w/maxresdefault.jpg',
    type: 'love',
    id:64
  },
  {
    name: 'Waiting For Love',
    singer: 'Avicii      ',
    path: "Waiting For Love.mp3",
    image: 'https://upload.wikimedia.org/wikipedia/vi/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png',
    type: 'love',
    id:65
  },
  {
    name: 'Walk Thru Fire',
    singer: 'Vicetone      ',
    path: "Walk Thru Fire.mp3",
    image: 'https://avatar-ex-swe.nixcdn.com/song/2018/08/06/f/5/6/1/1533518669570_640.jpg',
    type: 'tiktok',
    id:66
  },
  {
    name: 'Warriors',
    singer: '2WEI & Edda Hayes',
    path: "Warriors.mp3",
    image: 'https://i.ytimg.com/vi/vzPl2nhgbEs/maxresdefault.jpg',
    type: 'edm',
    id:67
  },
  {
    name: 'Way Back Home',
    singer: ' Shaun',
    path: "Way Back Home.mp3",
    image: 'https://i.ytimg.com/vi/eNt78mQJavY/maxresdefault.jpg',
    type: 'tiktok',
    id:68
  },
  {
    name: 'Wellerman',
    singer: 'Nathan Evans',
    path: "Wellerman.mp3",
    image: 'https://pic-bstarstatic.akamaized.net/ugc/ace031e58de22d87bfb7576724f11ca841759a48.jpg',
    type: 'strong',
    id:69
  },
  {
    name: 'My Love',
    singer: 'Westlife      ',
    path: "My Love.mp3",
    image: 'https://i.ytimg.com/vi/6WufhhwpxZ0/maxresdefault.jpg',
    type: 'love',
    id:70
  },
  {
    name: 'Why Not Me',
    singer: 'Enrique Iglesias',
    path: "Why Not Me.mp3",
    image: 'https://i.ytimg.com/vi/SHwvIwRMgWI/hqdefault.jpg',
    type: 'tiktok',
    id:71
  }
]
export {
  listAlbums,
  listMusics
}
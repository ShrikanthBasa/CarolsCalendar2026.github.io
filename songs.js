/* Traditional public-domain carol lyrics and page behavior */
const songs = [
    {
            title: "Joy to the World",
            subtitle: "A joyful hymn of praise",
            lyrics: `Joy to the world, the Lord is come!\nLet earth receive her King;\nLet every heart prepare Him room,\nAnd heaven and nature sing,\nAnd heaven and nature sing,\nAnd heaven, and heaven, and nature sing.\n\nJoy to the world, the Saviour reigns!\nLet men their songs employ;\nWhile fields and floods, rocks, hills and plains\nRepeat the sounding joy,\nRepeat the sounding joy,\nRepeat, repeat the sounding joy.\n\nNo more let sins and sorrows grow,\nNor thorns infest the ground;\nHe comes to make His blessings flow\nFar as the curse is found,\nFar as the curse is found,\nFar as, far as the curse is found.\n\nHe rules the world with truth and grace,\nAnd makes the nations prove\nThe glories of His righteousness,\nAnd wonders of His love,\nAnd wonders of His love,\nAnd wonders, wonders of His love.`
    },
    {
            title: "O Come, All Ye Faithful",
            subtitle: "A call to worship the newborn King",
            lyrics: `O come, all ye faithful,\nJoyful and triumphant,\nO come ye, O come ye to Bethlehem;\nCome and behold Him,\nBorn the King of angels;\n\nO come, let us adore Him,\nO come, let us adore Him,\nO come, let us adore Him,\nChrist the Lord.\n\nSing, choirs of angels,\nSing in exultation,\nSing, all ye citizens of heaven above;\nGlory to God\nIn the highest;\n\nO come, let us adore Him,\nO come, let us adore Him,\nO come, let us adore Him,\nChrist the Lord.\n\nYea, Lord, we greet Thee,\nBorn this happy morning,\nJesus, to Thee be all glory given;\nWord of the Father,\nNow in flesh appearing;\n\nO come, let us adore Him,\nO come, let us adore Him,\nO come, let us adore Him,\nChrist the Lord.`
     },
    {
        title: "Hark! The Herald Angels Sing",
        subtitle: "The angels proclaim Christ's birth",
        lyrics: `Hark! the herald angels sing,\n"Glory to the newborn King;\nPeace on earth, and mercy mild,\nGod and sinners reconciled!"\nJoyful, all ye nations, rise,\nJoin the triumph of the skies;\nWith the angelic host proclaim,\n"Christ is born in Bethlehem!"\n\nHark! the herald angels sing,\n"Glory to the newborn King!"\n\nChrist, by highest heaven adored,\nChrist, the everlasting Lord!\nLate in time behold Him come,\nOffspring of the Virgin's womb.\nVeiled in flesh the Godhead see;\nHail the incarnate Deity,\nPleased as man with men to dwell,\nJesus, our Emmanuel!\n\nHark! the herald angels sing,\n"Glory to the newborn King!"\n\nHail the heaven-born Prince of Peace!\nHail the Sun of Righteousness!\nLight and life to all He brings,\nRisen with healing in His wings.\nMild He lays His glory by,\nBorn that man no more may die,\nBorn to raise us from the earth,\nBorn to give us second birth.\n\nHark! the herald angels sing,\n"Glory to the newborn King!"`
    },
    {
        "title": "Shor Duniya Mein",
        "subtitle": "Aaj Paida Masih Ho Gaya",
        "lyrics": `Shor Duniya Mein Yeh Ho Gaya\nShor Duniya Mein Yeh Ho Gaya\nAaj Paida Masih Ho Gaya\nAaj Paida Masih Ho Gaya\n\nGadariye Raat Mein Bhedon Ko Charathe The × 4\nDoot Sandesh Unhe Degaya × 2\nAaj Paida Masih Ho Gaya\nAaj Paida Masih Ho Gaya\n\nSwarg Jhum Jhum Karke Yeh Gatha Tha × 4\nSare Duniya Ka Nur Aagaya × 2\nAaj Paida Masih Ho Gaya\nAaj Paida Masih Ho Gaya`
      },
      {
        "title": "Masiha Aaya Hai",
        "subtitle": "Jag Mein Khushiyan Laaya Hai",
        "lyrics": `Masiha aaya hai\nJag me khushiyaa laaya hai\nSaare jahaan me aaj ye paigaam laaya hai\nMasih aaya hai\n\nBibi mariyam usey sulaane\nMeethi lori gaati hai\nBade pyaar se usey sulaane\nKaandho par sehlaati hai\n\nMasih ka raaj aaya hai\nTaare ne batlaya hai × 2\nKyaa?\nMasiha aaya hai\n\nThokar maaro soot boot ko\nPehle dil ko saaf karo\nJo bhi hoga dushman apna\nPehle usko maaf karo\n\nMasih ka raaj aaya hai\nTaare ne batlaya hai × 2\nKyaa?\nMasiha aaya hai…`
      },
      {
        "title": "Oh the World Is Lost",
        "subtitle": "Jesus Christ Was Born for You and Me",
        "lyrics": `Oh the world is lost\nAs Satan has his way\nBlinding us with myths that cost\nOur Lord His special day\n\nLet’s give it back to Him\nNo Santa, snow or tree\nOnly CHRIST our Lord & King\nWas born to set us free\n\nChorus:\nJESUS CHRIST, JESUS CHRIST\nWas born for you and me\nTo save us all from sin He came\nThat we might all be free\nAnd bought our victory`
      },
      {
        "title": "Duniya Paap Mein Thi",
        "subtitle": "Masiha Paida Hua Hai",
        "lyrics": `Duniya Paap mai thi\nShaitan ne andha Kiya\nApni galat Bato se\nDuniya ko Bharma diya\n\nAb samay aa Gaya hai, sachai Jaan ne ka\nKi Yeshu hi Prabhu hai\nJo hamare liye paida hua\n\nMasiha – Masiha paida hua hai\nHame hamare paapon se Bachane kai liye\nMasiha – Masiha Paidha hua hai\nTaaki hum Jeevan ke anand ko mana saken.\n\nAai bhatke logo Yeshu ke pass aao\nVo hi to maarg satya or vo hi jeevan hai\nNa Santa na koi ped\nOr naa koi Jingle Bells\nSache Christmas ka matlab hai\nPrabhu Yeshu se mil`
      },
      {
        "title": "Bolo Raja Yeshu Ki Jai",
        "subtitle": "Bolo Raja Yeshu Ki Jai",
        "lyrics": `Bolo raja Yeshu ki Jai – 4\n\n1.\nCharani mei aaya raja Yeshu\nJyoti dikhaya raja Yeshu\nBandhan khola raja Yeshu\nHam ko bachaya raja Yeshu\n\n2.\nAyo ham milkar chale Yeshu ke saath\nTanman aur dhan laye Yeshu ke paas\nWahi hamara raja Yeshu\nAyo ham milkar gaye raja Yeshu`
      },
          {
              title: "Silent Night",
              subtitle: "A peaceful Christmas hymn",
              lyrics: `Silent night, holy night!\nAll is calm, all is bright\nRound yon Virgin Mother and Child!\nHoly Infant so tender and mild,\nSleep in heavenly peace,\nSleep in heavenly peace.\n\nSilent night, holy night!\nShepherds quake at the sight!\nGlories stream from heaven afar,\nHeavenly hosts sing Alleluia!\nChrist, the Saviour, is born!\nChrist, the Saviour, is born!\n\nSilent night, holy night!\nSon of God, love's pure light\nRadiant beams from Thy holy face,\nWith the dawn of redeeming grace,\nJesus, Lord, at Thy birth,\nJesus, Lord, at Thy birth.`
          },
    {
        title: "Away in a Manger",
        subtitle: "A tender song about the manger",
        lyrics: `Away in a manger, no crib for a bed,\nThe little Lord Jesus laid down His sweet head;\nThe stars in the sky looked down where He lay,\nThe little Lord Jesus asleep on the hay.\n\nThe cattle are lowing, the Baby awakes,\nBut little Lord Jesus, no crying He makes;\nI love Thee, Lord Jesus, look down from the sky,\nAnd stay by my cradle till morning is nigh.\n\nBe near me, Lord Jesus, I ask Thee to stay\nClose by me forever, and love me, I pray;\nBless all the dear children in Thy tender care,\nAnd fit us for heaven, to live with Thee there.`
    }
];
let selectedSong = 0;
const songList = document.getElementById("songList"),
    lyricsPanel = document.getElementById("lyricsPanel"),
    songSearch = document.getElementById("songSearch");

function renderSongList() {
    const term = songSearch.value.trim().toLowerCase();
    songList.innerHTML = "";
    songs.forEach((song, index) => {
        if (term && !song.title.toLowerCase().includes(term)) return;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "song-button" + (index === selectedSong ? " active" : "");
        button.textContent = `${index+1}. ${song.title}`;
        button.addEventListener("click", () => selectSong(index));
        songList.appendChild(button)
    });
    if (!songList.children.length) {
        songList.textContent = "No songs found."
    }
}

function selectSong(index) {
    selectedSong = index;
    renderSongList();
    const song = songs[index];
    lyricsPanel.innerHTML = `<button class="btn back-to-songs" type="button" onclick="document.querySelector('.song-panel').scrollIntoView({behavior:'smooth'})">← Song list</button><div class="lyrics-header"><div><h2>${song.title}</h2><p class="subtitle">${song.subtitle}</p></div><button class="btn" type="button" onclick="window.print()">Print Lyrics</button></div><div class="lyrics-text">${song.lyrics}</div><p class="lyrics-footer">Carols Calendar 2026</p>`;
    if (window.matchMedia("(max-width:700px)").matches) lyricsPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}
songSearch.addEventListener("input", renderSongList);
renderSongList();
selectSong(0);
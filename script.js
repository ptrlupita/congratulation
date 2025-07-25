// YouTube Player Variables
let player;
let isPlayerReady = false;
let isMusicPlaying = false;

// YouTube API Ready Callback
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    videoId: "aKSPX15qVSA", // Video ID yang Anda inginkan
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: "aKSPX15qVSA",
      showinfo: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      rel: 0,
      start: 0,
      mute: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
}

function onPlayerReady(event) {
  isPlayerReady = true;
  player.setVolume(30); // Set volume to 30%
  console.log("YouTube Player is ready!");
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isMusicPlaying = true;
    updateMusicButton();
    console.log("Music started playing");
  } else if (
    event.data === YT.PlayerState.PAUSED ||
    event.data === YT.PlayerState.ENDED
  ) {
    isMusicPlaying = false;
    updateMusicButton();
    console.log("Music paused/ended");
  }
}

function onPlayerError(event) {
  console.log("YouTube Player Error:", event.data);
  // Fallback ke musik alternatif jika ada error
  if (event.data === 150 || event.data === 101) {
    console.log("Video unavailable, trying alternative...");
    setTimeout(() => {
      player.loadVideoById("jfKfPfyJRdk"); // Fallback music
    }, 1000);
  }
}

// DOM Elements
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const landingPage = document.getElementById("landing-page");
  const letterPage = document.getElementById("letter-page");
  const nameInput = document.getElementById("name-input");
  const achievementSelect = document.getElementById("achievement-select");
  const generateBtn = document.getElementById("generate-btn");
  const backBtn = document.getElementById("back-btn");
  const recipientName = document.getElementById("recipient-name");
  const congratulationsText = document.getElementById("congratulations-text");
  const appreciationText = document.getElementById("appreciation-text");
  const futureWishesText = document.getElementById("future-wishes-text");

  // Music control elements
  const musicToggle = document.getElementById("music-toggle");
  const musicIcon = document.getElementById("music-icon");
  const musicText = document.getElementById("music-text");

  // Letter content templates
  const letterTemplates = {
    colloquium: {
      congratulations:
        "🎉 Selamat yaa atas kolokiumnya!! Akhirnya sampai juga di tahap ini. Penelitian kamu keren banget, semua kerja keras dan begadangmu benar-benar terbayar. And I'm really, really proud of you!",
      wishes: "Semangat terus buat ke depannya yaaa!!!",
    },
    thesis: {
      congratulations:
        "🎊 Selamat yaa atas sidang skripsinya! Ini merupakan suatu pencapaian yang luar biasa, dan aku, sebagai teman seperjuanganmu, merasa sangat-sangat bangga sama kamu. Setelah berbulan-bulan melakukan penelitian, setelah begadang dan revisi tanpa henti, akhirnya terbayar lunas hari ini. Kamu luar biasa!",

      wishes:
        "Semoga langkah-langkah berikutnya semakin lancar dan penuh keberhasilan. Aku yakin kamu akan terus bersinar dan bikin banyak perubahan baik ke depannya. Semangat terus yaaa!",
    },
    graduation: {

      congratulations:

        "🎓 Selamat yaa atas kelulusannya... You did it! Kamu keren banget bisa sampai di tahap ini. Selama kurang lebih empat tahun, kamu telah belajar, menjalani praktikum, menghadapi ujian, dan melewati berbagai tantangan perkuliahan lainnya; semua itu membawamu sampai di titik ini, titik di mana ada gelar yang tersemat di belakang nama kamu. Aku memang tidak banyak tahu apa saja struggle yang kamu lewati selama kuliah. Mungkin kamu melewati banyak malam tanpa tidur, atau sering lupa makan karena terlalu sibuk menyelesaikan tugas atau laporan praktikum yang menumpuk. Aku juga tidak tahu seberapa berat beban yang harus kamu pikul, atau seberapa sering kamu merasa ingin menyerah. Tapi, satu hal yang aku tahu, kamu berhasil sampai di titik ini karena kekuatan kamu sendiri. Dan itu sudah lebih dari cukup untuk membuat aku, salah satu teman seperjuanganmu, merasa luar biasa bangga sama kamu. Kamu hebat. And I'm really, really proud of you.",

      wishes:

        "Ketika kamu melangkah ke babak berikutnya dalam hidup kamu, apapun jalan yang kamu pilih, aku berharap segala hal baik selalu menyertai setiap langkahmu. Semoga kamu tetap bisa menjaga nyala api yang ada pada diri kamu, meskipun jalan yang kamu lewati tidak selalu mudah. Aku berharap kamu dapat menemukan ruang di dunia ini yang bisa kamu sebut 'rumah'. Sebuah tempat di mana kamu tidak hanya singgah, tetapi benar-benar berakar. Tempat di mana kamu dihargai bukan karena topeng yang kamu kenakan, tetapi karena jiwamu yang asli. Tempat di mana kamu dicintai tanpa syarat, dengan segala lebih dan kurangmu. Dan yang terpenting, tempat di mana kamu bisa menjadi dirimu sendiri sepenuhnya.",

"Di tempat itu, kamu dapat bernapas dengan lega, tertawa lepas tanpa beban, dan menangis tanpa perlu merasa dihakimi. Definisi 'rumah' ini tidak selalu berwujud bangunan dengan empat dinding atau hanya tentang seorang pasangan. Bisa jadi 'rumah' yang kamu temukan itu berbentuk 'pekerjaan' yang membuatmu merasa terus bersemangat ketika memulai hari, di mana di pekerjaan tersebut, semua idemu didengar dan kontribusimu dihargai. Bisa jadi 'rumah' yang kamu temukan itu berbentuk 'lingkaran pertemanan' yang selalu mendukung mimpimu, sekecil apapun itu. Di lingkaran pertemanan tersebut, mereka tidak hanya hadir dalam hari-hari bahagiamu, tapi juga ikut serta menemani dan menawarkan bahu serta telinga saat kamu berduka atau saat kamu merasa dunia tidak lagi berpihak kepadamu.",

"Bisa jadi 'rumah' yang kamu temukan itu berbentuk 'lingkungan atau komunitas' yang memeluk caramu berpikir, yang membuatmu merasa bertumbuh dan menjadi bagian dari sesuatu yang lebih besar. Mungkin juga 'rumah' itu berbentuk 'ketenangan' yang kamu ciptakan untuk dirimu sendiri, di mana kamu bisa berdamai dengan segala lebih dan kurangmu, baik dan burukmu, serta semua hal yang pernah membuatmu ragu pada dirimu sendiri. Aku berharap, kamu dapat menemukan 'rumah' tersebut, dalam bentuk apapun itu, karena sejatinya, semua orang berhak memiliki tempat di mana mereka bisa 'pulang'. Bukan hanya ke sebuah alamat, tetapi ke sebuah rasa tenang, rasa aman, dan rasa diterima sepenuhnya. Semoga semua harapan dan mimpi kamu perlahan menjadi kenyataan, satu per satu, dengan waktu yang tepat, dan usaha yang tidak pernah sia-sia.",

      appreciation:

        "Oh iya, aku juga mau mengucapkan terima kasih banyak atas semua kebaikan yang pernah kamu lakukan ke orang-orang di sekitar kamu, khususnya ke aku. Terima kasih banyak sudah mau menjadi teman aku. Terima kasih banyak sudah membantu aku selama di berkuliah di Geomatika, karena secara tidak langsung, bantuan kamu dapat membuat masa-masa terberat aku selama di Geomatika jadi terasa lebih ringan. Sekali lagi terima kasih banyak! Semoga setiap kebaikan dan pertolongan yang telah kamu berikan, akan kembali pada kamu suatu hari nanti, dengan cara yang paling indah dan tak terduga, karena apa yang kamu tanam dengan tulus, pasti akan tumbuh menjadi hal-hal baik di waktu yang tepat. Terima kasih sudah menjadi sosok yang begitu menginspirasi. Aku merasa sangat amat beruntung bisa melihat sebagian kecil dari perjalanan luar biasamu.",

    },
  };

  // Music Control Functions
  function toggleMusic() {
    if (!isPlayerReady) {
      console.log("Player not ready yet, please wait...");
      // Retry after 2 seconds
      setTimeout(() => {
        if (isPlayerReady) {
          toggleMusic();
        } else {
          alert("Musik sedang dimuat, silakan coba lagi dalam beberapa detik");
        }
      }, 2000);
      return;
    }

    try {
      if (isMusicPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    } catch (error) {
      console.error("Error controlling music:", error);
    }
  }

  function updateMusicButton() {
    if (isMusicPlaying) {
      musicToggle.classList.add("playing");
      musicIcon.textContent = "🎵";
      musicText.textContent = "Pause Music";
    } else {
      musicToggle.classList.remove("playing");
      musicIcon.textContent = "🎶";
      musicText.textContent = "Play Music";
    }
  }

  // Event Listeners
  generateBtn.addEventListener("click", generateLetter);
  backBtn.addEventListener("click", backToLanding);
  musicToggle.addEventListener("click", toggleMusic);

  nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      generateLetter();
    }
  });

  // Input validation
  nameInput.addEventListener("input", function () {
    const name = nameInput.value.trim();
    generateBtn.disabled = name.length < 2;

    if (name.length >= 2) {
      generateBtn.textContent = "Generate Letter ✨";
    } else {
      generateBtn.textContent = "Enter a name first";
    }
  });

  function generateLetter() {
    const name = nameInput.value.trim();
    const achievement = achievementSelect.value;

    if (name.length < 2) {
      nameInput.focus();
      nameInput.style.borderColor = "#ef4444";
      setTimeout(() => {
        nameInput.style.borderColor = "#e2e8f0";
      }, 2000);
      return;
    }

    // Set the recipient name
    recipientName.textContent = name;

    // Get the appropriate template
    const template = letterTemplates[achievement];

    // Set the letter content
    congratulationsText.textContent = template.congratulations;
    appreciationText.textContent = template.appreciation;
    futureWishesText.textContent = template.wishes;

    // Show letter page with animation
    landingPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    // Scroll to top
    window.scrollTo(0, 0);

    // Auto-play music when letter is generated (if not already playing)
    if (isPlayerReady && !isMusicPlaying) {
      setTimeout(() => {
        player.playVideo();
      }, 500);
    }
  }

  function backToLanding() {
    letterPage.classList.add("hidden");
    landingPage.classList.remove("hidden");

    // Clear the input
    nameInput.value = "";
    generateBtn.disabled = true;
    generateBtn.textContent = "Enter a name first";

    // Focus on input
    setTimeout(() => {
      nameInput.focus();
    }, 300);
  }

  // Initial setup
  generateBtn.disabled = true;
  generateBtn.textContent = "Enter a name first";
  nameInput.focus();

  // Initialize music button
  updateMusicButton();
});

// Alternative music playlist dengan Video ID yang valid
const musicPlaylist = [
  "aKSPX15qVSA", // Video yang Anda pilih
  "jfKfPfyJRdk", // Lofi Hip Hop - backup
  "5qap5aO4i9A", // Relaxing Piano
  "DWcJFNfaw9c", // Peaceful Music
  "lTRiuFIWV54", // Study Music
];

// Function to change background music
function changeMusicTrack(trackIndex = 0) {
  if (isPlayerReady && trackIndex < musicPlaylist.length) {
    console.log("Changing to track:", musicPlaylist[trackIndex]);
    player.loadVideoById(musicPlaylist[trackIndex]);
  }
}

// Auto-retry mechanism untuk memastikan YouTube API dimuat
let retryCount = 0;
function checkYouTubeAPI() {
  if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
    retryCount++;
    if (retryCount < 10) {
      console.log("Waiting for YouTube API... Retry:", retryCount);
      setTimeout(checkYouTubeAPI, 1000);
    } else {
      console.error("YouTube API failed to load after multiple retries");
    }
  } else {
    console.log("YouTube API loaded successfully");
  }
}

// Start checking when page loads
setTimeout(checkYouTubeAPI, 1000);

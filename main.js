

let button = document.getElementById('button');
let aktif = false;
const audio = document.getElementById('audio')
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollTop, scrollLeft);
    }

    document.body.style.overflow = 'hidden';
  }

  function buka() {
    window.onscroll = function () { }
    document.body.style.overflow = 'auto';
    document.getElementById('true').scrollIntoView({behavior: 'smooth'});
    audio.play()
    aktif = true
    if (aktif){
        button.style.display = 'none';
    }
    
  }
disableScroll()
// untuk mendapatkan url //
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || '';
const namaContainer = document.querySelector('.nama');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, '');


// Mendeteksi apakah pengguna mengakses dari desktop
function isDesktop() {
  return window.innerWidth > 1024; // Ubah nilai 1024 sesuai dengan lebar layar desktop yang ingin Anda tentukan
}

// Mengarahkan pengguna ke halaman lain jika mengakses dari desktop
function redirectIfDesktop() {
  if (isDesktop()) {
      window.location.href = "halaman-lain.html"; // Ganti "halaman-lain.html" dengan URL halaman yang ingin Anda arahkan
  }
}

// Panggil fungsi untuk memeriksa apakah perlu diarahkan jika mengakses dari desktop
redirectIfDesktop();

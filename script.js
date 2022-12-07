const navbar = document.getElementById('navbar')
const itemHouse = document.querySelectorAll('a')[0]
const itemYours = document.querySelectorAll('a')[1]
const itemGallery = document.querySelectorAll('a')[2]
const itemInfo = document.querySelectorAll('a')[3]
const home = document.getElementById('home')
const yours = document.getElementById('yours')
const gallery = document.getElementById('gallery')
const info = document.getElementById('info')

const yoursDiv = yours.querySelector('div');
const galleryDiv = gallery.querySelector('div');
let infoDiv = info.querySelector('div');
let infoImg = info.querySelector('img');
let infoP = infoDiv.querySelector('p');
let infoH1 = infoDiv.querySelector('h1');

const audio = document.querySelector("audio");
function play() {
    audio.pause();
    audio.loop = true;
    audio.play();
}

function active(i) {
    let itemNavbar = [itemHouse, itemYours, itemGallery, itemInfo];
    if (itemNavbar[i].classList.contains('active') == true) {
        itemNavbar.splice(i, 1); //Mengurangi item ke i 
        for (const item of itemNavbar) {
            item.classList.remove('active') //item selain i
        }
    }
}

function animation(i) {
    let itemAnimation = [yoursDiv, galleryDiv, infoP, infoH1, infoImg]
    if (itemAnimation[i].style.animation != '') {
        itemAnimation.splice(i, 1); //Mengurangi item ke i 
        for (const item of itemAnimation) {
            item.style.animation = ''; //item selain i
        }
    }
}

let btnAwal = document.querySelectorAll('button')[0];
let homeDivs = document.querySelectorAll('.home-content div')
function start() {
    navbar.style.display = 'flex';
    navbar.style.animation = 'munculTotal 1s ease-in-out 1';
    homeDivs[1].removeAttribute('hidden');
    btnAwal.style.animation = 'munculTotal 1s ease-in-out 1 reverse forwards';
    btnAwal.style.display = 'none';
}

btnAwal.addEventListener('click', () => {
    start()
    play()
    launchFullScreen(document.documentElement); // the whole page
})
let video = document.querySelector('video');
let youtube = document.querySelector('iframe');

itemHouse.addEventListener('click', () => {
    for (const homeDiv of homeDivs) {
        homeDiv.style.animation = 'munculTotal 1s ease-in-out 1';
    }
    start()
    active(0);
    video.pause();
    youtube.onpause();
})
itemYours.addEventListener('click', () => {
    itemYours.classList.add('active');
    active(1);
    yoursDiv.style.animation = 'munculTotal 1s ease-in-out 1';
    animation(0);
    video.pause();
    youtube.onpause();

})
itemGallery.addEventListener('click', () => {
    itemGallery.classList.add('active');
    active(2);
    galleryDiv.style.animation = 'munculTotal 1s ease-in-out 1';
    animation(1);

})
itemInfo.addEventListener('click', () => {
    itemInfo.classList.add('active');
    active(3)
    infoP.style.animation = 'munculTotal 1s ease-in-out 1';
    infoImg.style.animation = 'munculTotal 1s ease-in-out 1';
    infoH1.style.animation = 'munculTotal 1s ease-in-out 1, kedut 1s ease-in-out infinite alternate';
    infoH1.style.animationDelay = '0s, 1s'
    yoursDiv.style.animation = '';
    galleryDiv.style.animation = '';
    video.pause();
    youtube.onpause();
})

infoImg.addEventListener('mouseover', () => {
    infoImg.style.animation = 'kedut 0.5s ease-in-out alternate-reverse infinite';
})

const bars = document.querySelectorAll('.bar ul li')
const modalSekelumit = document.getElementById("modal-sekelumit"),
    modalDitinggalkan = document.getElementById('modal-ditinggalkan'),
    modalBahagia = document.getElementById('modal-bahagia'),
    modalBersalah = document.getElementById('modal-bersalah');
const buttonClose = document.querySelectorAll('button');

// When the user clicks the button, open the modal 
bars[0].addEventListener('click', () => {
    modalSekelumit.style.display = "block";
})
bars[1].addEventListener('click', () => {
    modalDitinggalkan.style.display = "block";
})
bars[2].addEventListener('click', () => {
    modalBahagia.style.display = "block";
})
bars[3].addEventListener('click', () => {
    modalBersalah.style.display = "block";
})
for (const itemBtnClose of buttonClose) {
    itemBtnClose.addEventListener('click', () => {
        modalSekelumit.style.display = "none";
        modalDitinggalkan.style.display = "none";
        modalBahagia.style.display = "none";
        modalBersalah.style.display = "none";
    })
}
window.addEventListener('click', (event) => {
    if (event.target == modalSekelumit) {
        modalSekelumit.style.display = "none";
    }
    if (event.target == modalDitinggalkan) {
        modalDitinggalkan.style.display = "none";
    }
    if (event.target == modalBahagia) {
        modalBahagia.style.display = "none";
    }
    if (event.target == modalBersalah) {
        modalBersalah.style.display = "none";
    }
})


//  SLIDE
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    audio.volume = '1'
}



video.addEventListener('click', () => {
    audio.volume = '0.1'
})
youtube.addEventListener('click', () => {
    audio.volume = '0.08'
})

// Find the right method, call on correct element
function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

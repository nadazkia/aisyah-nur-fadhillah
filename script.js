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

itemYours.addEventListener('click', () => {
    itemYours.classList.add('active');
    itemHouse.classList.remove('active');
    itemGallery.classList.remove('active');
    itemInfo.classList.remove('active');
    yoursDiv.style.animation = 'munculTotal 1s ease-in-out 1';
    galleryDiv.style.animation = '';
    infoP.style.animation = '';
    infoH1.style.animation = '';
    infoH1.style.animationDelay = ''
    infoImg.style.animation = '';
})
itemGallery.addEventListener('click', () => {
    itemGallery.classList.add('active');
    itemHouse.classList.remove('active');
    itemYours.classList.remove('active');
    itemInfo.classList.remove('active');
    galleryDiv.style.animation = 'munculTotal 1s ease-in-out 1';
    yoursDiv.style.animation = '';
})
itemInfo.addEventListener('click', () => {
    itemInfo.classList.add('active');
    itemHouse.classList.remove('active');
    itemYours.classList.remove('active');
    itemGallery.classList.remove('active');
    infoP.style.animation = 'munculTotal 1s ease-in-out 1';
    infoImg.style.animation = 'munculTotal 1s ease-in-out 1';
    infoH1.style.animation = 'munculTotal 1s ease-in-out 1, kedut 1s ease-in-out infinite alternate';
    infoH1.style.animationDelay = '0s, 1s'
    yoursDiv.style.animation = '';
    galleryDiv.style.animation = '';
})

infoImg.addEventListener('mouseover', () => {
    infoImg.style.animation = 'kedut 0.5s ease-in-out alternate-reverse infinite';
})
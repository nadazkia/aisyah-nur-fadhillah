const itemHouse = document.querySelectorAll('a')[0]
const itemYours = document.querySelectorAll('a')[1]
const itemInfo = document.querySelectorAll('a')[2]
const home = document.getElementById('home')
const yours = document.getElementById('yours')
const info = document.getElementById('info')


itemYours.addEventListener('click', () => {
    const yoursDiv = yours.querySelector('div');
    yoursDiv.style.animation = 'munculTotal 1s ease-in-out 1';
    let infoDiv = info.querySelector('div');
    let infoP = infoDiv.querySelector('p');
    let infoH1 = infoDiv.querySelector('h1');
    let infoImg = info.querySelector('img');
    infoP.style.animation = '';
    infoH1.style.animation = '';
    infoH1.style.animationDelay = ''
    infoImg.style.animation = '';
})
itemInfo.addEventListener('click', () => {
    let infoDiv = info.querySelector('div');
    let infoImg = info.querySelector('img');
    let infoP = infoDiv.querySelector('p');
    let infoH1 = infoDiv.querySelector('h1');
    infoP.style.animation = 'munculTotal 1s ease-in-out 1';
    infoImg.style.animation = 'munculTotal 1s ease-in-out 1';
    infoH1.style.animation = 'munculTotal 1s ease-in-out 1, kedut 1s ease-in-out infinite alternate';
    infoH1.style.animationDelay = '0s, 1s'
    const yoursDiv = yours.querySelector('div');
    yoursDiv.style.animation = '';
})
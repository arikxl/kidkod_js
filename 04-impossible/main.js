const coin = document.getElementById('coin');
const footer = document.getElementById('footer');

let isGameOn = true;

coin.addEventListener('mouseover', moveCoin)

function moveCoin() { 
    if (!isGameOn) return;
    const rnd1 = Math.floor(Math.random() * 95);
    const rnd2 = Math.floor(Math.random() * 85);
    coin.style.left = rnd1+'%'
    coin.style.top = rnd2+'%'
}
moveCoin()


footer.addEventListener('mouseover', function () {
   isGameOn = !isGameOn;
})

function hit() {
    document.getElementById('logo').innerHTML = "You Did It!"
}



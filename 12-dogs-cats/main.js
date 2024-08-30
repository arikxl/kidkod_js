const catUrl = 'https://api.thecatapi.com/v1/images/search';
const dogUrl = 'https://api.thedogapi.com/v1/images/search';

let catScore = 0;
let dogScore = 0;

async function getPhotos() {
    try {
        const catResponse = await fetch(catUrl)
        // console.log('response:', response)
        const catJson = await catResponse.json();
        // console.log('json:', json)
        const catImg = catJson[0].url;
        document.getElementById('catImg').setAttribute('src', catImg);

        const dogResponse = await fetch(dogUrl)
        // console.log('response:', response)
        const dogJson = await dogResponse.json();
        // console.log('json:', json)
        const dogImg = dogJson[0].url;
        document.getElementById('dogImg').setAttribute('src', dogImg);

    } catch (error) {
        console.error(error)
    }
}
getPhotos()

function addScore(animal) {
    if (animal === 'cat') {
        catScore++;
        document.getElementById('catScoreH1').innerHTML = catScore;

        if (catScore === 10) {
            document.getElementById('left').style.display = 'none';
             document.getElementById('catScoreH1').innerHTML = 'Cats Rule the World!!!';
        }
    } else {
        dogScore++;
        document.getElementById('dogScoreH1').innerHTML = dogScore;
          if (dogScore === 10) {
            document.getElementById('right').style.display = 'none';
            document.getElementById('dogScoreH1').innerHTML = 'Dogs Rule the World!!!';
        }
    }
    getPhotos()
}




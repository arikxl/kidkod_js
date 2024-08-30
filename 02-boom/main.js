const countH2 = document.getElementById('countH2');
const headline = document.getElementById('headline');


let count = 0;

function addOne() {
    count++;
    countH2.innerHTML = count;

    if (count % 7 === 0 || count.toString().includes('7')) {
        countH2.innerHTML = '💣';
        // headline.innerHTML = 'BOOM! The count is ' + count;
        alert('BOOM! The count is '+count)
    }
}

function boom() { 
    count++;
    countH2.innerHTML = '💣';

    if (!count.toString().includes('7') && count%7!==0) {
        alert('Sorry... The count is ' + count);
        countH2.innerHTML = count;
    }
}
function check() {
    const answer = 'הארי פוטר';
    const userAnswer = document.getElementById('gameInput').value.toLowerCase();
    const length = userAnswer.length-1;
    // console.log('length:', length)
    const blurEffect = 8 - length ;
    if(userAnswer[length]===answer[length]){
        // document.getElementById('gameImg').style.filter =`blur(${blurEffect}px)`
        document.getElementById('gameImg').style.filter = 'blur(' + blurEffect + 'px)';
    }
}



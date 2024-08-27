const right = document.getElementById('right');
const _0x2d5f45=_0x1b21;(function(_0x2fc8cb,_0x130a79){const _0x13bd21=_0x1b21,_0x1b4e83=_0x2fc8cb();while(!![]){try{const _0x2e3d81=parseInt(_0x13bd21(0x87))/0x1*(-parseInt(_0x13bd21(0x89))/0x2)+parseInt(_0x13bd21(0x8c))/0x3*(parseInt(_0x13bd21(0x86))/0x4)+parseInt(_0x13bd21(0x84))/0x5*(-parseInt(_0x13bd21(0x83))/0x6)+parseInt(_0x13bd21(0x8d))/0x7+parseInt(_0x13bd21(0x8b))/0x8+parseInt(_0x13bd21(0x88))/0x9+-parseInt(_0x13bd21(0x8a))/0xa;if(_0x2e3d81===_0x130a79)break;else _0x1b4e83['push'](_0x1b4e83['shift']());}catch(_0x37dc7c){_0x1b4e83['push'](_0x1b4e83['shift']());}}}(_0x3f83,0xc5c27));function _0x1b21(_0x544697,_0xe0c531){const _0x3f8358=_0x3f83();return _0x1b21=function(_0x1b2178,_0x21cf0f){_0x1b2178=_0x1b2178-0x83;let _0x17b9c5=_0x3f8358[_0x1b2178];return _0x17b9c5;},_0x1b21(_0x544697,_0xe0c531);}function _0x3f83(){const _0xe3c788=['18XPwrQF','9241939IQrlwY','6HUYQCc','1057650jqHBuL','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','149524Rdnvgz','150557TTcfRc','2113605uZmuoq','12HIrRwq','12052970fIwwBm','10806272dXUWcw'];_0x3f83=function(){return _0xe3c788;};return _0x3f83();}const key=_0x2d5f45(0x85);

let userActivityTimeout;

function color() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  right.style.backgroundColor = `rgb(${red},${green},${blue})`
  document.getElementById('pMark').innerHTML = right.style.backgroundColor;

  // if(time===2) getTitle(right.style.backgroundColor)
  let time = 0;
  clearTimeout(userActivityTimeout);
  userActivityTimeout=setInterval(() => {
    time++;
    // console.log('time:', time)
    if (time > 1) { 
      time = 0;
      getTitle(right.style.backgroundColor);
      clearTimeout(userActivityTimeout);
    }
  }, 1000);
  

}

color()



// async function getTitle(color) {
//   console.log('color:', color)
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Authorization": "Bearer " + key,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//     //    "prompt":  `give me a name for the color: ${color}.   just a name!`,
//         "prompt": `Provide a creative one or two-word name for the color "${color}".`,
//         "temperature": 0.7,
//     })
//   };

//     try {
        
//     const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', requestOptions);
//     const data = await response.json();
//     const generatedTitle = data.choices[0].text;

//     console.log('Generated Title:', generatedTitle);
//     document.getElementById('mark').innerHTML=generatedTitle;
//   } catch (error) {
//     console.error(error);
//   }
// }


async function getTitle(color) {
  console.log("Calling GPT3")
   
  fetch("https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions", {
    method: 'POST',
    headers: {
    "Authorization": "Bearer " + key,
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "prompt": `Provide a creative/artistic/legendary one or two-word name for the color "${color}".`,
      // "max_tokens": 5,
      "temperature": 1,
      "top_p": 1,
      "n": 1,
      "stream": false,
    })
  }).then(response => {
    return response.json()
  }).then(data=>{
    const generatedTitle = data.choices[0].text;
    document.getElementById('mark').innerHTML = generatedTitle;
  }).catch(error => {
    console.log('Something bad happened ' + error)
  });
        
}



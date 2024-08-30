const myImg = document.getElementById('myImg');

const noFlip = document.getElementById('noFlip');
const flipX = document.getElementById('flipX');
const flipY = document.getElementById('flipY');

const blurInpt = document.getElementById('blurInpt');
const brightnessInpt = document.getElementById('brightnessInpt');
const contrastInpt = document.getElementById('contrastInpt');
const grayscaleInpt = document.getElementById('grayscaleInpt');
const hueRotateInpt = document.getElementById('hueRotateInpt');
const invertInpt = document.getElementById('invertInpt');
const saturateInpt = document.getElementById('saturateInpt');
const sepiaInpt = document.getElementById('sepiaInpt');



function showPic(){
	resetPic()
	const uploadPic = document.getElementById('uploadPic');
	
	let reader = new FileReader();
	reader.readAsDataURL(uploadPic.files[0]);
	
	reader.onload =()=>{
		myImg.setAttribute('src' , reader.result)
	}
}

function addFilter(){
	let filter = 'blur('+blurInpt.value+'px) brightness('+ brightnessInpt.value+'%) contrast('+contrastInpt.value +'%) grayscale('+grayscaleInpt.value +'%) hue-rotate('+hueRotateInpt.value+'deg) invert(' + invertInpt.value+'%) saturate('+saturateInpt.value+'%) sepia('+sepiaInpt.value+'%)';                              
	//console.log(filter)
	myImg.style.filter=filter;
}



function flipImg(){
	if(flipX.checked){
		myImg.style.transform = 'scaleX(-1)';
	}else if(flipY.checked){
		myImg.style.transform = 'scaleY(-1)';
	}else{
		myImg.style.transform = 'scale(1,1)'
	}
}

function resetPic(){
	blurInpt.value ='0';
	brightnessInpt.value ='100';
	contrastInpt.value ='100';
	grayscaleInpt.value ='0';
	hueRotateInpt.value ='0'
	invertInpt.value ='0';
	saturateInpt.value ='100';
	sepiaInpt.value ='0';
	noFlip.checked=true;
	flipImg();
	addFilter();
}

function downloadPic() {
	
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Get the natural width and height of the image
    const naturalWidth = myImg.naturalWidth;
    const naturalHeight = myImg.naturalHeight;
    
    // Set the canvas dimensions to match the image's natural size
    canvas.width = naturalWidth;
    canvas.height = naturalHeight;
    
	let filter = 'blur('+blurInpt.value+'px) brightness('+ brightnessInpt.value+'%) contrast('+contrastInpt.value +'%) grayscale('+grayscaleInpt.value +'%) hue-rotate('+hueRotateInpt.value+'deg) invert(' + invertInpt.value+'%) saturate('+saturateInpt.value+'%) sepia('+sepiaInpt.value+'%)';                              
    context.filter = filter;

    if (flipX.checked) {
        context.translate(naturalWidth, 0);
        context.scale(-1, 1);
    } else if (flipY.checked) {
        context.translate(0, naturalHeight);
        context.scale(1, -1);
    }
    
    context.drawImage(myImg, 0, 0, naturalWidth, naturalHeight);
    
    const dataURL = canvas.toDataURL('image/png');
    const randomString = Date.now().toString().slice(-5);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'kidkod'+randomString+'.png';
    downloadLink.click();
}

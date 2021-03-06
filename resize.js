/**
* resize.js
*
* function used to update the windowsValues array (to keep the track of the window size)
*/



/**
* Store the values of the window's width, height, image's width, height,
* the dx (in pixels), the dy (in pixels), the scale of the resized image
* into an array named windowsValues
*/
function setWindowsValues(){
  let winWidth = parseInt(window.innerWidth)-0.1;
  let winHeight = parseInt(window.innerHeight)-0.1;
  let imgWidth = imgSize[0].width;
  let imgHeight = imgSize[0].height;
  let dx = 0;
  let dy = 0;
  let scale;
  if(imgWidth / winWidth >= imgHeight / winHeight){ //Black borders on the top and the bottom of the window
    scale = 1.0 / (imgWidth / winWidth);
    dy = (winHeight - (imgHeight* scale)) / 2;
  }else{
    scale = 1.0 / (imgHeight / winHeight);
    dx = (winWidth - (imgWidth * scale)) / 2;
  }
  console.log(document.body.clientWidth);
  let array = [winWidth, winHeight, imgWidth, imgHeight, dx, dy, scale];
  windowsValues = array;
}

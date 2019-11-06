// code taken from KyleMit from stackoverlow.com: https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
var rgb = [204, 0, 0];

// randomly change to showcase updates
setInterval(setContrast, 800);

function setContrast() {
  // randomly update
  rgb[0] = Math.round(Math.random() * 204);
  rgb[1] = Math.round(Math.random() * 204);
  rgb[2] = Math.round(Math.random() * 255);

  // http://www.w3.org/TR/AERT#color-contrast
  var o = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 800);
  var fore = (o > 125) ? 'black' : 'white';
  var back = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  $('p').css('color', fore); 
  $('body').css('background-color', back);
  

}
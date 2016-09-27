//Color Array
var color_text = document.getElementById('clr');
var color_ary = new Array('feffff', 'fe0000', 'ff0000', '01cf02', 'fbe601', '9400ff', '03befd', 'd43efc');

function colr() {
  color_text.style.color = '#' + color_ary[Math.ceil(Math.random() * color_ary.length)];
  setTimeout('colr()', 500);
}
window.addEventListener('onload', colr());





var e1 = document.getElementById('ed1');
var e2 = document.getElementById('ed2');
var e3 = document.getElementById('ed3');
var e4 = document.getElementById('ed5');
var ai = document.getElementById('ani-ima');
var wi = document.getElementById('workshop-ima');
var ti = document.getElementById('dep1');
var si = document.getElementById('illu1');
var pi = document.getElementById('phot1');
var pi2 = document.getElementById('phot2');
var f1 = document.getElementById('ed4');
var f2 = document.getElementById('ed6');

const btne = document.getElementById('buttonedi');
const btna = document.getElementById('buttonani');
const btnw = document.getElementById('buttonwor');
const btnt = document.getElementById('buttontyp');
const btns = document.getElementById('buttonsit');
const btnp = document.getElementById('buttonpho');
const btnacceuil = document.getElementById('logo');
const btnabout = document.getElementById('buttonabout');
const btncontact = document.getElementById('buttoncontact');

btnabout.addEventListener("click",ApparitionAbout, false);
var zoomabout= document.getElementById('about');
function ApparitionAbout(){
  zoomabout.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}

btncontact.addEventListener("click",ApparitionContact, false);
var popContact= document.getElementById('contact');
function ApparitionContact(){
  popContact.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}

btne.addEventListener("click",changeStyleEd, false);
function changeStyleEd() {
    ai.style.opacity ="0";
    wi.style.opacity ="0";
    ti.style.opacity ="0";
    si.style.opacity ="0";
    pi.style.opacity ="0";
    pi2.style.opacity ="0";
    e1.style.opacity ="1";
    e2.style.opacity ="1";
    e3.style.opacity ="1";
    e4.style.opacity ="1";
    f1.style.opacity = "1";
    f2.style.opacity = "1";
}


btns.addEventListener("click",changeStyleSi, false);
function changeStyleSi() {
    ai.style.opacity = "0";
    wi.style.opacity = "0";
    ti.style.opacity ="0" ;
    pi.style.opacity ="0" ;
    pi2.style.opacity ="0";
    e1.style.opacity ="0";
    e2.style.opacity ="0";
    e3.style.opacity ="0";
    e4.style.opacity ="0";
    f1.style.opacity = "0";
    f2.style.opacity = "0";
    si.style.opacity ="1" ;
}



btna.addEventListener("click",changeStyleAn, false);
function changeStyleAn() {
    wi.style.opacity = "0";
    ti.style.opacity ="0" ;
    si.style.opacity ="0" ;
    pi.style.opacity ="0" ;
    pi2.style.opacity ="0";
    e1.style.opacity ="0";
    e2.style.opacity ="0";
    e3.style.opacity ="0";
    e4.style.opacity ="0";
    ai.style.opacity = "1";
    f1.style.opacity = "1";
    f2.style.opacity = "1";
}



btnt.addEventListener("click",changeStyleTy, false);
function changeStyleTy() {
    ai.style.opacity = "0";
    wi.style.opacity = "0";
    si.style.opacity ="0" ;
    pi.style.opacity ="0" ;
    pi2.style.opacity ="0";
    e1.style.opacity ="0";
    e2.style.opacity ="0";
    e3.style.opacity ="0";
    e4.style.opacity ="0";
    f1.style.opacity = "0";
    f2.style.opacity = "0";
    ti.style.opacity ="1" ;
}



btnp.addEventListener("click",changeStylePh, false);
function changeStylePh() {
    ai.style.opacity = "0";
    wi.style.opacity = "0";
    ti.style.opacity ="0" ;
    si.style.opacity ="0" ;
    e1.style.opacity ="0";
    e2.style.opacity ="0";
    e3.style.opacity ="0";
    e4.style.opacity ="0";
    f1.style.opacity = "0";
    f2.style.opacity = "0";
    pi.style.opacity ="1" ;
    pi2.style.opacity ="1";
}



btnw.addEventListener("click",changeStyleWo, false);
function changeStyleWo() {
    ai.style.opacity = "0";
    ti.style.opacity ="0" ;
    si.style.opacity ="0" ;
    pi.style.opacity ="0" ;
    pi2.style.opacity ="0";
    e1.style.opacity ="0";
    e2.style.opacity ="0";
    e3.style.opacity ="0";
    e4.style.opacity ="0";
    f1.style.opacity = "0";
    f2.style.opacity = "0";
    wi.style.opacity = "1";
}

btnacceuil.addEventListener("click",changeStyleAcc, false);
function changeStyleAcc() {
    ai.style.opacity="1";
    ti.style.opacity="1";
    si.style.opacity="1";
    pi.style.opacity="1";
    pi2.style.opacity ="1";
    e1.style.opacity ="1";
    e2.style.opacity ="1";
    e3.style.opacity ="1";
    e4.style.opacity ="1";
    f1.style.opacity = "1";
    f2.style.opacity = "1";
    wi.style.opacity="1";
}

//zooms

const imed1 = document.getElementById('ed1');
const imed2 = document.getElementById('ed2');
const imed3 = document.getElementById('ed3');
const imed4 = document.getElementById('ed5');
const imed5 = document.getElementById('phot1');
const imed6 = document.getElementById('phot2');
const imed7 = document.getElementById('dep1');
const imed8 = document.getElementById('illu1');
const imed9 = document.getElementById('plumeau');
const imed10 = document.getElementById('ed6');
const imed11 = document.getElementById('ed4');


const boutonclose = document.getElementById('boutonclose');
var zoomimed1= document.getElementById('zoom-photo1');
var zoomimed2= document.getElementById('zoom-photo2');
var zoomimed3= document.getElementById('zoom-photo3');
var zoomimed4= document.getElementById('zoom-photo4');
var zoomimed5= document.getElementById('zoom-photo5');
var zoomimed6= document.getElementById('zoom-photo6');
var zoomimed7= document.getElementById('zoom-photo7');
var zoomimed8= document.getElementById('zoom-photo8');
var zoomimed9= document.getElementById('zoom-photo9');
var zoomimed10= document.getElementById('zoom-photo10');
var zoomimed11= document.getElementById('zoom-photo11');

imed1.addEventListener("click",zoomApparition,false);
imed2.addEventListener("click",zoomApparition2,false);
imed3.addEventListener("click",zoomApparition3,false);
imed4.addEventListener("click",zoomApparition4,false);
imed5.addEventListener("click",zoomApparition5,false);
imed6.addEventListener("click",zoomApparition6,false);
imed7.addEventListener("click",zoomApparition7,false);
imed8.addEventListener("click",zoomApparition8,false);
imed9.addEventListener("click",zoomApparition9,false);
imed10.addEventListener("click",zoomApparition10,false);
imed11.addEventListener("click",zoomApparition11,false);

function zoomApparition() {
    zoomimed1.style.display="block";
    document.documentElement.style.overflow = 'hidden';
}
function zoomApparition2() {
    zoomimed2.style.display="block";
    document.documentElement.style.overflow = 'hidden';
}
function zoomApparition3() {
    zoomimed3.style.display="block";
    document.documentElement.style.overflow = 'hidden';
}
function zoomApparition4() {
  zoomimed4.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition5() {
  zoomimed5.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition6() {
  zoomimed6.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition7() {
  zoomimed7.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition8() {
  zoomimed8.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition9() {
  zoomimed9.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition10() {
  zoomimed10.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}
function zoomApparition11() {
  zoomimed11.style.display="block";
  document.documentElement.style.overflow = 'hidden';
}

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
    document.documentElement.style.overflow = 'visible';
  });
  
}

//slide

let slideIndex = [1,1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4","mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let y;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (y = 0; y < x.length; y++) {
     x[y].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}










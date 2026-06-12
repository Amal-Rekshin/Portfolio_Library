const home = document.getElementById("home");
const about = document.getElementById("about");
const abtbut = document.getElementById("abtbut");
const certificate = document.getElementById("certificate");
const contactfor = document.getElementById("contactfor");

const b1 = document.getElementById("block1");
const b2 = document.getElementById("block2");
const b3 = document.getElementById("block3");
const b4 = document.getElementById("block4");


home.onclick = function(){
    b1.style.display='block';
    b2.style.display='none';
    b3.style.display='none';
    b4.style.display='none';
}

about.onclick = function(){
    b2.style.display='block';
    b1.style.display='none';
    b3.style.display='none';
    b4.style.display='none';
}

abtbut.onclick = function(){
    b2.style.display='block';
    b1.style.display='none';
    b3.style.display='none';
    b4.style.display='none';
}

certificate.onclick = function(){
    b3.style.display='block';
    b1.style.display='none';
    b2.style.display='none';
    b4.style.display='none';
}

contactfor.onclick = function(){
    b4.style.display='block';
    b1.style.display='none';
    b2.style.display='none';
    b3.style.display='none';
}


const home = document.getElementById("home");
const about = document.getElementById("about");
const project = document.getElementById("project");
const certi = document.getElementById("certificate");
const contact = document.getElementById("contact");

const hero = document.getElementById("section1");
const des = document.getElementById("section2");
const proj = document.getElementById("section3");
const cer = document.getElementById("section4");
const cont = document.getElementById("section5");

home.onclick = () => {
    hero.style.display = 'block';
    des.style.display = 'none';
    proj.style.display ='none';
    cer.style.display ='none';
    cont.style.display ='none';

};

about.onclick = () => {
    hero.style.display = 'none';
    des.style.display = 'block';
    proj.style.display ='none';
    cer.style.display ='none';
    cont.style.display ='none';
};

project.onclick = () => {
    hero.style.display = 'none';
    des.style.display = 'none';
    proj.style.display ='block';
    cer.style.display ='none';
    cont.style.display ='none';
};

certi.onclick = () => {
    hero.style.display = 'none';
    des.style.display = 'none';
    proj.style.display ='none';
    cer.style.display ='block';
    cont.style.display ='none';
};

contact.onclick = () => {
    hero.style.display = 'none';
    des.style.display = 'none';
    proj.style.display ='none';
    cer.style.display ='none';
    cont.style.display ='block';
};


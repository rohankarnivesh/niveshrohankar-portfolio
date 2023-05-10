let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

var typed = new Typed(".typing",{
    strings:["","Developer", "Creator", "Designer", "Engineer", "Coder", "Gamer"],
    typeSpeed:150,
    BackSpeed:100,
    loop:true
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450, 
    reset: true
});

sr.reveal('.play-text', {delay:200, origin:'bottom'});
sr.reveal('.play-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:300, origin:'bottom'});
sr.reveal('.what-box', {delay:100, origin:'bottom'});
sr.reveal('.skill-icon', {delay:250, origin:'top'});
sr.reveal('.project-box', {delay:150, origin:'bottom'});
sr.reveal('.send', {delay:150, origin:'top'});

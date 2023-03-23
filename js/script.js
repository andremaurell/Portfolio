let points = document.querySelector(".points");
let moreText = document.querySelector(".more");
let btnReadMore = document.getElementById("btnReadMore");
let btnAll = document.querySelectorAll(".btn");



const changeName = (buttonId) => {
    const id = document.getElementById(buttonId);
    const paiId = document.getElementById(buttonId).parentNode.id;
    const pointsId = document.querySelector(`#${paiId} .points`);
    const moreId = document.querySelector(`#${paiId} .more`);

    


    if(id.textContent === "Read More"){
        id.textContent = "Read less";
        pointsId.style.display = "none";
        moreId.style.display = "inline";
    }else{
        id.textContent = "Read More";
        pointsId.style.display = "inline";
        moreId.style.display = "none";
    }
};



function readMore2(){
    let points2 = document.querySelector(".points2");
    let moreText2 = document.querySelector(".more2");
    let btnReadMore2 = document.getElementById("btnReadMore2");



    if(points2.style.display === "none"){
        points2.style.display = "inline";
        moreText2.style.display = "none";
        btnReadMore2.innerHTML = "Read more";
    }else{
        points2.style.display = "none";
        moreText2.style.display = "inline";
        btnReadMore2.innerHTML = "Read less";
    }
}

function readMore3(){
    let points3 = document.querySelector(".points3");
    let moreText3 = document.querySelector(".more3");
    let btnReadMore3 = document.getElementById("btnReadMore3");



    if(points3.style.display === "none"){
        points3.style.display = "inline";
        moreText3.style.display = "none";
        btnReadMore3.innerHTML = "Read more";
    }else{
        points3.style.display = "none";
        moreText3.style.display = "inline";
        btnReadMore3.innerHTML = "Read less";
    }
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach( link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }

    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.toggle('active');

};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


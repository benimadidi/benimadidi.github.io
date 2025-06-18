/*-----------------------------------------------------------------*/
/*icone de bascule de la barre de navigation*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
});

/*----------------------------------------------------------------------------------------*/
/* Lien actif pour la section visible lors du défilement */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*---------------------------------------------------------*/
    /* Barre de navigation fixe */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*----------------------------------------------------------------------------------------*/
    /*Retirer la navbar et l'icon de menu au scroll*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/*---------------------------------------------------------*/
/*Afficher les elements au fur et a mesure du scroll*/
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form, .skill-box, .about-content', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .home-content p', { origin: 'left' });


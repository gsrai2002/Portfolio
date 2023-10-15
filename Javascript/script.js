//Toggle icon navbar
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
});

// Active Nav link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', highlightActive);

function highlightActive(){
    //window.scrollY tells you how far down the page the user has scrolled in pixels
    let fromTop = window.scrollY + 80;

    sections.forEach(section => {
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            // Remove 'active' class from all links
            navLinks.forEach(link =>{
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding link
            const href = "#" + section.getAttribute('id');
            document.querySelector(`nav a[href="${href}"]`).classList.add('active');
        }
    });
}

//Remove the toggle icon and navbar when click navbar link (scroll)
window.addEventListener('scroll', () =>{
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
});

//Scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .portfolio-container, .skills-content, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
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
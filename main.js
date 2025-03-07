let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]')
                .classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const skillsBars = document.querySelectorAll('.skills-bar');

    skillsBars.forEach(bar => {
        const percentage = parseInt(bar.dataset.percentage);
        const progressSpan = bar.querySelector('.progress span');

        progressSpan.style.width = `${percentage}%`; // Set width dynamically

    });
});
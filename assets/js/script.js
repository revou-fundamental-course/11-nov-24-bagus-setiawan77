// Toggle class active

const navbarNav = document.querySelector('.navbar_nav');
// Ketika menu diklik
document.querySelector('#nav-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// Klik diluar sidebar untuk menghilangkan nav

const menu = document.querySelector('#nav-menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

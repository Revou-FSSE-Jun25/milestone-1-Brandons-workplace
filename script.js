const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('change', function () {
    nav.classList.toggle('slide');
});

function opentab(tabName) {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.querySelector('.menu__container');

open.addEventListener('click', () => menu.classList.add('show-nav'));

close.addEventListener('click', () => menu.classList.remove('show-nav'));



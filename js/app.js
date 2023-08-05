const toogleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('main-menu');

toogleMenu.addEventListener('click',()=>{
    mainMenu.classList.toggle('main-menu--show');
});

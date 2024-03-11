const menu = document.querySelector('.menu');
const menuTabs = document.querySelectorAll('.menu__tab');
const tabs = document.querySelectorAll('.tab');

menu.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    console.log(target);
    for (let i = 0; i < menuTabs.length; i++) {
        menuTabs[i].classList.remove('active');
        target.classList.add('active');
        tabs[i].classList.remove('active');
        if (menuTabs[i].classList.contains('active')) {
            tabs[i].classList.add('active');
        }
    }
})
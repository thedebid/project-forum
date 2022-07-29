

const userbtn = document.querySelector(user-btn);
const toggleMenu = () => {
    dropdown-menu.classList.toggle('hidden');
    dropdown-menu.classList.toggle('flex');
}
userbtn.addEventListner('click', toggleMenu);
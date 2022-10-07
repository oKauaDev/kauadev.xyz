
const navbar = document.querySelector("label#menu-mobile");
const menu = document.querySelector("ul#navbar");
const header = document.querySelector("header");

navbar.addEventListener('click', event => {
    if (window.innerWidth < 650) {
        if (menu.style.height == "0px" || menu.style.height == "") {
            menu.style.height = "100vh";
            menu.style.visibility = "visible";
            header.classList.add("activet");
        }else{
            menu.style.height = "0";
            menu.style.visibility = "hidden";
            header.classList.remove("activet");
        }
    }
});
/**
 * Fechar menu quando clicar fora dele
 */
window.addEventListener('click', event => {
    if (window.innerWidth < 650) {
        if (event.target == menu) {
            if (menu.style.height != "0px") {
                closeNavbar();
            }
        }
    }
});

function closeNavbar() {
    if (window.innerWidth < 650) {
        if (menu.style.height != "0px") {
            menu.style.height = "0";
            menu.style.visibility = "hidden";
            header.classList.remove("activet");
        }
    }
}
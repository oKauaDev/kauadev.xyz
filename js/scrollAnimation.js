const animatedElements = document.querySelectorAll('[animation]');
function animateAll() {
    const windowTop = window.scrollY + (window.innerHeight - (window.innerHeight / 10) * 1.5);
    animatedElements.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animated");
        }else{
            element.classList.remove("animated");
        }
    });
}

animateAll();

window.addEventListener('scroll',function () {
     animateAll();
     //função extra pra navbar
     if (window.scrollY > 0) {
        const navber = this.document.querySelector('header');
        navber.classList.add("transparent");
     }else{
        const navber = this.document.querySelector('header');
        navber.classList.remove("transparent");
     }
});
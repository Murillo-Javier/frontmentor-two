function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('close')) {
        menuMobile.classList.toggle('close');
        menuMobile.classList.toggle('open');
    } else {
        menuMobile.classList.toggle('close');
        menuMobile.classList.toggle('open');
    }
}
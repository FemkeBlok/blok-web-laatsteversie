(function () {

    const burger = document.querySelector('.nav-burger');
    const menu = document.querySelector('.nav-list');

    burger.onclick = function () {
        menu.classList.toggle('open');
    }

})()
window.onload = function () {

    var socialShare = document.querySelector(".socialShare");
    var trigger = document.querySelector(".trigger");

    trigger.onclick = function () {
        if (!socialShare.classList.contains("active")) {
            socialShare.classList.add("active");
        } else {
            socialShare.classList.remove("active");
        }
    }
}

(function () {

    var burger = document.querySelector('.nav-burger');
    var menu = document.querySelector('.nav-list');


    burger.addEventListener('click', function () {
        menu.classList.toggle('open');
    });

})();
var socialShare = document.querySelector(".socialShare");


window.top.addEventListener("click", function () {
    if (!socialShare.classList.contains("active")) {
        socialShare.classList.add("active");
    } else {
        socialShare.classList.remove("active");
    }
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

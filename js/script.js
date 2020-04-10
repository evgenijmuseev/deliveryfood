document.addEventListener("DOMContentLoaded", function() {

    "use strict";

    let close = document.querySelector(".close"),
        open = document.querySelector("#shopping-cart"),
        modal = document.querySelector(".modal");

    open.addEventListener("click", () => {
        modal.classList.add("isopen");
    });

    close.addEventListener("click", () => {
        modal.classList.remove("isopen");
    });

    new WOW().init();


});
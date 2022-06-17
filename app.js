let counts = setInterval(updated);
let upto = 0;
function updated() {
    var count = document.getElementById("counter");
    var counttwo

    count.innerHTML = ++upto;
    if (upto === 189) {
        clearInterval(counts);
    }
}








let countstwo = setInterval(updatedtwo, 50);
let uptotwo = 0;
function updatedtwo() {
    var counttwo = document.getElementById("counter1");

    counttwo.innerHTML = ++uptotwo;
    if (uptotwo === 15) {
        clearInterval(countstwo);
    }
}

let countsthree = setInterval(updatedthree, 50);
let uptothree = 0;
function updatedthree() {
    var counthree = document.getElementById("counterapps");

    counthree.innerHTML = ++uptothree;
    if (uptothree === 10) {
        clearInterval(countsthree);
    }
}

let countsfour = setInterval(updatedfour, 50);
let uptofour = 0;
function updatedfour() {
    var countfour = document.getElementById("counterapps2");

    countfour.innerHTML = ++uptofour;
    if (uptofour === 13) {
        clearInterval(countsfour);
    }
}



function myFunctionone(x) {
    var element = document.getElementById("nav-section")
    element.classList.toggle("nav-section-open");
    x.classList.toggle("change");
  
  }

  var x = window.matchMedia("(max-width: 800px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  function myFunction(x) {
    if (x.matches) { // If media query matches
 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


    } else {
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


    }
  }

  var navbar = document.getElementById("nav-section");
  var sticky = navbar.offsetTop;
  window.onscroll = function() {scroll()};
  function scroll() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("nav-section-scroll")
    } else {
      navbar.classList.remove("nav-section-scroll");
    }
  }

  AOS.init();

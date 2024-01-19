$(document).ready(function(){
$(window).on('load',function(){
$('.preloader').addClass('complete');
});

    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }

    })
    var typed = new Typed(".element",{
        strings: ["Asmae MOUBARRIZ","A Computer Engineering Student"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    //progress bars
    var waypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler:  function() {
    var p =document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style","width:80%;transition:1s all");
    p[1].setAttribute("style","width:70%;transition:1.5s all");
    p[2].setAttribute("style","width:55%;transition:1.7s all");
    p[3].setAttribute("style","width:65%;transition:2s all");
    p[4].setAttribute("style","width:76%;transition:2.3s all");
    p[5].setAttribute("style","width:56%;transition:2.5s all");
    p[6].setAttribute("style","width:70%;transition:2.7s all");
    p[7].setAttribute("style","width:60%;transition:3s all");
    p[8].setAttribute("style","width:56%;transition:3.3s all");
        },

        offset:'80%'

      });

 //owl caroussel
    $('.owl-carousel').owlCarousel({
        margin:10,
        autoplay:true,
        loop:true,
        dots:false,
        items:3
    });





});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



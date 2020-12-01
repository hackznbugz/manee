//menubar 
var hamburger = document.getElementsByClassName('navbtn')[0];
var linksMobile = document.getElementsByClassName('navigationMobile');
var hamburgerLayers = document.getElementsByClassName('navbtnlayer');
var navLinks = document.getElementsByClassName('navb-mobile')[0];
var isOpened = false;
hamburger.addEventListener('click', ()=>{
    if(isOpened){
        navLinks.style.transform = "translateX(100%)";
        hamburgerLayers[0].style.margin = ".5em 0";
        hamburgerLayers[0].style.transform = "none";
        hamburgerLayers[1].style.display = "block";
        hamburgerLayers[2].style.transform = "none";
        hamburgerLayers[2].style.margin = ".5em 0";
        isOpened = false;
    }else if(!isOpened){
        navLinks.style.transform = "none";
        hamburgerLayers[0].style.transform = "rotate(45deg)";
        hamburgerLayers[0].style.margin = "-2px";
        hamburgerLayers[2].style.transform = "rotate(-45deg)";
        hamburgerLayers[2].style.margin = "-2px";
        hamburgerLayers[1].style.display = "none";
        isOpened = true;
    }
});

window.addEventListener('resize', function(){
    document.getElementsByClassName('main')[0].style.height = document.getElementsByClassName('mainImage')[0].height + 'px';
});

document.getElementsByClassName('main')[0].style.height = document.getElementsByClassName('mainImage')[0].height + 'px';

//scroll
$(document).ready(function() {
    $('a[href*=\\#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 200;
    $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.nav li.active').removeClass('active');
                    $('.nav li').eq(i).addClass('active');
            }
    });
}).scroll();

for(i=0; i<linksMobile.length; i++){
    linksMobile[i].onclick = function(){
        $( "#btn" ).click();
    }
}

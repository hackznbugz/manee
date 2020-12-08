//menubar 
var hamburger = document.getElementsByClassName('navbtn')[0];
var linksMobile = document.getElementsByClassName('navigationMobile');
var hamburgerLayers = document.getElementsByClassName('navbtnlayer');
var navLinks = document.getElementsByClassName('navb-mobile')[0];
var isOpened = false;
hamburger.addEventListener('click', ()=>{
    if(isOpened){
        navLinks.style.transform = "translateX(100vw)";
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

var cnum = 0;
var snum = 0;
$(window).scroll(function() {
    var classes = document.getElementById('classes');
    var students = document.getElementById('students');
    var scrollDistance = $(window).scrollTop() + 400;
    
    if ($('.achievements').position().top <= scrollDistance) {
        function anim(){
            if(cnum != 2000){
                cnum += 1;
            }
            
            classes.innerHTML = cnum + "+";
        }
        function anim2(){
            if(snum != 1000){
                snum += 1;
            }
            students.innerHTML = snum + "00+";
        }
        setInterval(anim, 1);
        setInterval(anim2, 1);
    }else{
        cnum = 0;
        snum = 0;
    }
}).scroll();

for(i=0; i<linksMobile.length; i++){
    linksMobile[i].onclick = function(){
        $( "#btn" ).click();
    }
}


function getViewport() {

    var viewPortWidth;
    var viewPortHeight;
   
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }
   
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
       viewPortWidth = document.documentElement.clientWidth,
       viewPortHeight = document.documentElement.clientHeight
    }
   
    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}


window.addEventListener('resize', function(){
    var viewPort = getViewport();
    if(viewPort[0]<600){
        document.getElementsByClassName('main')[0].style.height = document.getElementsByClassName('mainImage')[0].height - 60 + 'px';
    }
});

document.getElementById('whatsapp').onclick = function(){
    window.location.href = 'https://wa.link/69w18r';
}

document.getElementById('whatsapp-m').onclick = function(){
    window.location.href = 'https://wa.link/69w18r';
}

document.getElementById('register').onclick = function(){
    window.location.href = 'join/';
}

var viewPort = getViewport();
if(viewPort[0]<600){
    document.getElementsByClassName('main')[0].style.height = document.getElementsByClassName('mainImage')[0].height - 60 + 'px';
}    


/* eslint-env jquery */

$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })
    
    /* Navigation scroll */
    
    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top}, 1000);
    return false;
    });

    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(
        (direction) => {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(
        (direction) => {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(
        (direction) => {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    
    $('.js--nav-icon').click(function(){
        const nav = $('.js--main-nav')
        const icon = $('.js--nav-icon ion-icon')
       
        nav.slideToggle(200)
 
        
        if (icon[0].name == 'menu-outline') {
            icon[0].name = 'close-outline'
        } else if (icon[0].name == 'close-outline') {
            icon[0].name = 'menu-outline'
        }
    });
    
});
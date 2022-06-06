$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:4
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});


$(function(){
    // navbar link active
    $('.navbar .nav-item').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
    });
    // banner slider;
    $('.banner-slider').slick({
        arrows:false,
        autoplay : true,
        dots : true,
        
    });
    // About Video venobox;
    $('.venobox').venobox({
        spinColor: '#e23e38',
    });
    // team slider;
    $('#team .team-slider').slick({
        slidesToShow: 4,
        arrows: false,

    });
    // testimoinal;
    $('.testimonals-slider').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        autoplay : true,
        

    });
    // Counter js;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // brand Slider;
    $('.brand-slider').slick({
       slidesToShow: 5, 
       prevArrow : '<i class="slick-prev prev-arrow fas fa-chevron-left"><i>',
       nextArrow : '<i class="slick-next next-arrow fas fa-chevron-right"><i>',
       autoplay : true,
    });

    

});
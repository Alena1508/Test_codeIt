$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed:800,
        cssEase: 'linear',
        arrows:false
    });

    // modal window
    $('.header__feedback').click( function(event){
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){
                $('.modalForm')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('.modalForm__close, .overlay').click( function(){
        $('.modalForm')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
    });

    // validation
    $('input#name, input#email, input#phone, textarea#message').unbind().blur( function(){
        var id = $(this).attr('id');
        var val = $(this).val();

        switch(id) {
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if(val.length > 2 && val !== '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).val('').attr('placeholder','Enter correct name');
                }
                break;

            case 'phone':
                var rv_phone = /^\d[\d\(\)\ -]{4,14}\d$/;
                if(val !== '' && rv_phone.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).val('').attr('placeholder','Enter correct phone');
                }
                break;


            case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if(val !== '' && rv_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).val('').attr('placeholder','Enter correct email');
                }
                break;


            case 'message':
                if(val !== '' && val.length < 5000) {
                    $(this).removeClass('error').addClass('not_error');

                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).val('').attr('placeholder','Enter correct message');
                }
                break;
        }
    });

    // placeholder
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

    // filter mobile
    $('.filter-btn').on('click', function(){
        $('.filter').slideToggle();
    });

    // mobile menu
    $(".js-showMobileMnu, a.menu__link").on('click', function () {
        $(".js-wrapper").toggleClass("--active");
        $(".menu").toggleClass("--active");
    });

});
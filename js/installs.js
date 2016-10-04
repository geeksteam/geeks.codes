$(document).ready(function () {

    "use strict";
    
    /* ---- COUNTDOWN TIMER ---- */

    // this is parameter of "Open Web Site", you can change it

        $('#clock').countDown({
            targetDate: {
                'day': 		10,
                'month': 	6,
                'year': 	2016,
                'hour': 	0,
                'min': 		0,
                'sec': 		0
            },
            omitWeeks: true
        });


    /* ---- BACKGROUND IMAGE ---- */

    // BACKGROUND IMAGE
    // if you want to change image upload your image in "img" folder and
    // enter path in "backstretch" parameter : "img/template.png"
    $(".countdown-background").backstretch("img/bg_3.jpg");
    
    /* ---- HIDE PRELOADER ---- */
    $('body').imagesLoaded(function () {
        $('#preloader').css('display', 'none');
        /* ---- BEAUTIFUL APPEARANCE ---- */
        $('.animated').viewportChecker({});
    });

    /* ---- COMMENTS SLIDER ---- */
    $("#comments-slider").owlCarousel({
        items: 4 // Count visible comments in slider
    });

    /* ---- SCROLLING ---- */
    $('a[href^="#"]').on('click', function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 700);
        return false;
    });

    /* ---- CONTACT FORM ---- */
    $('.success').fadeOut(10);
    $('.error').fadeOut(10);
    $("#contact").on('submit', function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var subject = $("#cf-subject").val();
        var message = $("#cf-message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: dataString,
                success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                }
            });
        }
        else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }
        return false;
    });


    /* ---- BACKGROUND VIDEO ---- */
    var player = $(".player").YTPlayer();
    $("#bg-play").on('click', function (event) {
        player.playYTP();
    });
    $("#bg-pause").on('click', function (event) {
        player.pauseYTP();
    });


    /* ---- INITIALIZE MAILCHIMP ---- */
    $('#mc-form').ajaxChimp({
        callback: mailchimpCallback,
        url: "http://esy.us10.list-manage.com/subscribe/post?u=883b40b20a099fc26055a6c2a&amp;id=0a4f6ed7f9" // Just paste your mailchimp list url inside the "".
    });

    /* 
     MAILCHIMP CALLBACK METHOD 
    */
    function mailchimpCallback(resp) {
        if (resp.result === 'success') { // if your submit accepted, you can write script here

        } 
        else if(resp.result === 'error') { // if something wrong, you can write script here

        }
    }

});
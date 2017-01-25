/* JQUERY */
$(document).ready(function(){
       
    // MASONRY ----------------------------------------------
    
    $(function(){
        $('.section-content').masonry({
            itemSelector : '.grid1, .grid2, .grid3',
            columnWidth : 230,
            gutterWidth : 15,
            isResizable: true,
            isAnimated: true,
            animationOptions: {
                duration: 400,
                easing: 'linear',
                queue: false
            }
        });
    });
    reloaded = 0;
    
    $('.logo, .logo-tiny').click(function(){
        $('.section-content').masonry( 'reload' );
        reloaded += 1;
        console.log('Reloading Masonry #'+reloaded);
        $.scrollTo(0, 800);
    });

    var timeOut = window.setTimeout(function(){
        $('.section-content').masonry( 'reload' );
        reloaded += 1;
        console.log('Reloading Masonry #'+reloaded);
    }, 1000);
    
    
    // NAVIGATIE ----------------------------------------------
    
    $('.nav li').hover(function(){
        $(this).not('.active').animate({
            opacity: 1
        }, 200)
    },function(){
        $(this).not('.active').animate({
            opacity: 0.5
        }, 200)
    });
    
    $('.nav li').click(function(){
        clickedOn = this.id;
        console.log('Clicked on: ' + clickedOn);
        switch(clickedOn){
            case "nav-wat":
                pos = 0;
                break;
            case "nav-waarom":
                pos = $('#waarom .headline').offset().top - 242 - 15;
                break;
            case "nav-contact":
                pos = $('#contact .headline').offset().top - 274 - 15;
                break;
        }
        $.scrollTo(pos, 800);
    });
        
    // ON SCROLL OR RESIZE BROWSER ----------------------------------------------
    
    $(window).scroll(function () {
        resizeWater()
    });

    $(window).resize(function() {
        resizeWater()
    });

    function resizeWater(){
        S1 = S2 = S3 = S4 = 50
        innerH = window.innerHeight;
        innerW = window.innerWidth;
        pageH = $('.main-right').height();
        scrollH = $('.main-left').offset().top;
        S1 = $('.section').eq(0).offset().top - 300;
        S2 = $('.section').eq(1).offset().top - 300;
        S3 = $('.section').eq(2).offset().top - 300;
        P1 = ((scrollH/pageH)*100).toFixed(0);
        P2 = ((scrollH/(pageH-innerH))*100).toFixed(0);
        $('.bg-water').css("backgroundPosition", "100%"+P2+"%")
        
        if(scrollH>S3){
            currentSection = "nav-contact";
            $('.white-border-top').stop().animate({
                height: "274px"
            },200);
        } else if(scrollH<=S3 && scrollH>S2) {
            currentSection = "nav-waarom";
            $('.white-border-top').stop().animate({
                height: "242px"
            },200);
        } else if(scrollH<=S2) {
            currentSection = "nav-wat";
            $('.white-border-top').stop().animate({
                height: "210px"
            },200);
        } else {
            currentSection = "Onbekend";
        }
        $('.nav li').removeClass("active");
        $('.nav li').stop().animate({
            opacity: 0.5
        }, 200)
        $('#'+currentSection).addClass("active");
        $('#'+currentSection).stop().animate({
            opacity: 1
        }, 200)
        
        if(innerW > 1110){
            $('.logo').css("visibility","visible")
            $('.logo-tiny').css("visibility","hidden")
            logoSize = "BIG LOGO";
        } else {
            $('.logo').css("visibility","hidden")
            $('.logo-tiny').css("visibility","visible")
            logoSize = "tiny logo";
        };
        
        console.log('Scroll percentage: ' + P2 + '% | Browser size: ' + innerW + 'x' + innerH + ' | Sectie: ' + currentSection + ' (' + scrollH + ' / '+ S1 + '-' + S2 + '-' + S3 + ') | ' + logoSize)
    };
    
    // TABEL ----------------------------------------------

    n = $('th').length;
    for (i=0; i<=n; i++)
    {
        $('tr th:nth-child('+i+')').addClass('c'+i);
        $('tr td:nth-child('+i+')').addClass('c'+i);
    }
    
    $('td').hover(function(){
        column = $(this).attr("class");
        console.log(column);
        $('.'+column).not('th, .c1').addClass("focus");
    },function(){
        $('.'+column).not('th, .c1').removeClass("focus");
    });
   
    // CONTACTFORM ----------------------------------------------
    
    hasValidMessage = false;
    hasValidEmail = false;
    hasValidTelephone = false;
    disableSend = false;
    
    function isValidEmail(email) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(email);
    };
    
    function isValidTelephone(telephone) {
        var pattern = new RegExp(/\d{9,}/g);
        return pattern.test(telephone);
    };
    
    function isValidToSend() {
        if(hasValidMessage==true && (hasValidEmail==true || hasValidTelephone==true)) {
            $('button').hover(function(){
                $('button').text("Verzend");
                $('button').css("backgroundPosition", "50% -76px");
            },function(){
                $('button').text("Verzend");
                $('button').css("backgroundPosition", "50% 0px");
            });
        } else if (hasValidMessage==true) {
            $('button').hover(function(){
                $('button').text("Geen email of telefoonnummer?");
                $('button').css("backgroundPosition", "50% -152px");
            },function(){
                $('button').text("Verzend");
                $('button').css("backgroundPosition", "50% 0px");
            });
        } else {
            $('button').hover(function(){
                $('button').text("Geen bericht?");
                $('button').css("backgroundPosition", "50% -152px");
            },function(){
                $('button').text("Verzend");
                $('button').css("backgroundPosition", "50% 0px");
            });
        }
    }
    
    isValidToSend(); // Trigger on page load
    
    $('textarea[name="message"]').keyup(function() {
        message = $(this).val();
        if(message!=""){
            $(this).css("background", "#FFF url('images/check-3.jpg') no-repeat 691px 5px")
            hasValidMessage = true;
        } else {
            $(this).css("background", "#FFF")
            hasValidMessage = false;
        }
        isValidToSend(); // Trigger on key up
    });
    
    $('input[name="email"]').keyup(function() {
        email = $(this).val();
        if(isValidEmail(email)) {
            $(this).css("background", "#FFF url('images/check-3.jpg') no-repeat 388px 5px")
            hasValidEmail = true;
        } else {
            $(this).css("background", "#FFF")
            hasValidEmail = false;
        }
        isValidToSend(); // Trigger on key up
        if (email == ""){
            $(this).css("color", "#CCC")
        } else {
            $(this).css("color", "#77828C")
        };
    });
    
    $('input[name="telephone"]').keyup(function() {
        telephone = $(this).val();
        telephone = telephone.replace(/\s+/g, '');
        if(isValidTelephone(telephone)) {
            $(this).css("background", "#FFF url('images/check-3.jpg') no-repeat 388px 5px")
            hasValidTelephone = true;
        } else {
            $(this).css("background", "#FFF")
            hasValidTelephone = false;
        }
        isValidToSend(); // Trigger on key up
        if (telephone == ""){
            $(this).css("color", "#CCC")
        } else {
            $(this).css("color", "#77828C")
        };
    });
    
    $("#contactForm").submit(function(event) {
        event.preventDefault();
        var $form = $(this);        
                                    
        message     = $form.find('textarea[name="message"]').val();
        email       = $form.find('input[name="email"]').val();
        telephone   = $form.find('input[name="telephone"]').val();
        url         = $form.attr('action');
        
        if (message==""){
            message="-"
        }
        if (email=="email@me.com ?"){
            email="-"
        }
        if (telephone=="(+32) 1234 567 890 ?"){
            telephone="-"
        }
        
        /*
        console.log('Message: ' + message);
        console.log('Email: ' + email);
        console.log('Telephone: ' + telephone);
        console.log(url);
        */
                                                 
        if(disableSend==false && hasValidMessage==true && (hasValidEmail==true || hasValidTelephone==true)) {
            console.log('Sending form');
            sendStart = new Date().getTime();
            $.post( url, {
                message: message, 
                email: email, 
                telephone: telephone
            },
            function(data) {
                var ajaxLoadTime = new Date().getTime() - sendStart;
                console.log('Ajax loadtime: ' + ajaxLoadTime)
                console.log('Ajax feedback:<br />' + data);
                disableSend = true;
                $('textarea, input').prop('disabled', true).css("background","none");
                $('button').text("Bedankt, uw bericht is succesvol verzonden");
                $('button').hover(function(){
                    $('button').text("Bedankt, uw bericht is succesvol verzonden");
                    $('button').css("backgroundPosition", "50% -76px");
                },function(){
                    $('button').text("Bedankt, uw bericht is succesvol verzonden");
                    $('button').css("backgroundPosition", "50% 0px");
                });
            });
        } else {
            console.log('Not sending form: Invalid inputs');
        };
    });
    
    $('textarea').focus();
    
    $('input').focusin(function(){
        if ($(this).val() = ""){
            
        }
    });
    
    /* SCROLL TO TOP ON LOAD */
    
    window.scrollTo(0, 0);
    
/*
    // GRID ITEM HOVER ----------------------------------------------
    $('.hover').append("<div class=\"magnify-overlay\"></div><div class=\"magnify\"></div>");
    $('.hover').find('.corpus').append("<div class=\"read-more\"></div>");
    $('.hover').hover(function(){
        clickedOn = $(this).id;
        $(this).animate({
            top: "-=5px"
        },200);
        $(this).find('.magnify').animate({
            opacity: 1
        },200);
        $(this).find('.magnify-overlay').animate({
            opacity: 0.75
        },200);
    },function(){
        $(this).animate({
            top: "+=5px"
        },200);
        $(this).find('.magnify').animate({
            opacity: 0
        },200);
        $(this).find('.magnify-overlay').animate({
            opacity: 0
        },200);
    });
    */
    
}); // JQUERY END
$(function($){ 
    function openNav(){
    $('#header').toggleClass('on')
        if($('#header').hasClass('on')){
            $('.nav').css({
            display:'block'
            }).animate({
                right:'0px'
            },500)
        } else {
            $('.nav').animate({
                right:'-320px'
            },500, function(){
                $(this).css({  
                    display:'none'
                })
            })
        }
        // $('.outlayer').toggleClass('on')
    }

    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    $(window).resize(function(){
        var winWidth = $(this).innerWidth ()
        if (winWidth > 800) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'block',
                right:'0px',
                
            })
        }else if (winWidth<=800){
            $('#header').removeClass('on')
            $('.nav').css({
                display:'none',
                right:'-320px',
            })
        }
    })
      //메인슬라이드 연결 
      $('.slide-inner').slick({
        autoplay:true, // 자동재생
        dots:true, //동그라미 버튼
        autoplaySpeed:3000, // 슬라이드 재생 시간
        slidesToShow:1, //보여질 슬라이드 수(생략가능)
        slldesToScroll:1, //이동 슬라이드 수(생략가능)
        pauseOnHover:true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotHover:false, //동그라미 버튼에 호버시 자동실행 멈춤여부
        pauseOnFocus:true, //동그라미 버튼에 클릭시 자동실행 멈춤여부
        cssEase:'ease', //속도함수 (생략가능)
        draggdle:true, //마우스 드래그시 슬라이드 교체가능 (생략가능)
        fade:false, //슬라이드 수평으로 이동하지 않고 제자리에서 사라지고 나타남
        arrows:true, // 좌우 화살표 사용여부
        prevArrow:'<button class="marrow prevArrow"><i class="fas fa-angle-left"></i></button> ',
        nextArrow:'<button class="marrow nextArrow"><i class="fas fa-angle-right"></i></button>',

    })
    $('.plpa').toggle( 
        function(){
        $(this).find('i').removeClass('fa-pause')
        .addClass('fa-play')
        $('.slide-inner').slick('slickPause')
    },
    function(){
        $(this).find('i').removeClass('fa-play')
        .addClass('fa-pause')
        $('.slide-inner').slick('slickPlay')
    })

})(jQuery)
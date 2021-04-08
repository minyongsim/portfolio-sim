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
        $('.outlayer').toggleClass('on')
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
        autoplaySpeed:4500, // 슬라이드 재생 시간
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
        responsive: [{
            breakpoint: 801,
            settings: {
                arrows: false,
                fade: true,
            }
        }]

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
    
    var href, src, alt, lieq;
  $('.gellary > li > a').on('click', function(e){
    e.preventDefault();//기본 이벤틀 막아줌
    lieq = $(this).parent().index()
    $('.gellaryPopup').addClass('on')
    href = $(this).attr('href')
    src = $(this).find('img').attr('src')
    alt = $(this).find('img').attr('alt')
    //console.log(alt)
    $('.popuplist > div > a').attr('href',href)
    $('.popuplist > div > a > img').attr({
        'src':src,
        'alt':alt
    })
 
  })

  $('.gellaryPopup .close, .gellaryPopup').on('click',function(){
      $('.gellaryPopup').removeClass('on')
  })
  $('.popuplist').on('click',function(e){
      e.stopPropagation(); //부모한테 이벤트 전파를 막음
  }) 
  function changeList(ind){
    href = $('.gellary > li').eq(ind).find('a').attr('href')
    src = $('.gellary > li').eq(ind).find('img').attr('src')
    alt = $('.gellary > li').eq(ind).find('img').attr('alt')
    $('.popuplist > div > a').attr('href',href)
    $('.popuplist > div > a > img').attr({
        'src':src,
        'alt':alt
  }).css({
      opacity:'0.5'
  }).stop().animate({
      opacity:'1'
  }, 500)
}

  $('.popuplist .prev').on('click',function(){
    --lieq;
    if (lieq < 0){
        lieq = 7;
    }
    changeList(lieq)
  })

  $('.popuplist .next').on('click',function(){
    ++lieq;
    if (lieq > 7){
        lieq = 0;
    }
    changeList(lieq)
    })
    
    var sct=0;
    var winHeight; 
	$(window).scroll(function(){
        sct=$(this).scrollTop();
        winHeight = $(this).height()/2
		if(sct >= winHeight){
            $(".header-outer").css({
                background:'rgba(0,0,0,0.1)'
            });
            
		} else {
            $(".header-outer").css({
                background:'rgba(0,0,0,1)'
            });
        }

        // 스크롤탑값이 100이상이 되면 맨위로 버튼이 보이고 100미만이면 숨기기
        if(sct>=100){
            $(".gotop").addClass("on").stop().animate({
                opacity: 1
            },500)
        }else{
            $(".gotop").removeClass("on").stop().animate({
                opacity:0
            },500)
        }
        // sct 값이 
        if(sct >= $("#Abilitys").offset().top){
         skils(80, '.html');
         skils(80, '.css');
         skils(80, '.js');
         skils(80, '.jq');
         skils(80, '.react');
         skils(80, '.photoshop');
         skils(80, '.illustrator');
         
        }else{
            $('.skillcontainer .myscore').removeClass('on')
        }

        function skils (jumsu, classname){
            var i=0
            var skill = setInterval( function(){
                if (i < jumsu ) {
                    i++
                    $(classname).find('.myscore').text(i+'%').addClass('on')
                }else{
                    clearInterval(skill)
                }
            },40)
        }
       
    
    });


    $(".gotop").on("click",function(){
        $("html,body").stop().animate({
            scrollTop:"0"
        },800,"linear")
    })
    
    $('.nav .depth1 > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        var index = $(this).parent().index()
        $('body, html').stop().animate({
            scrollTop:index*$(window).height()
        }, 800)
        //return false
 
    })

    $(".section").on("mousewheel",function(e, wh){    
        var index = $(this).index()
		//마우스 휠을 올렸을때	
          if (wh > 0) {  
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
             var prev = $(this).prev().offset().top;
             $('.depth1 li').eq(index-1).addClass('on')
             $('.depth1 li').eq(index-1).siblings().removeClass('on')
			 //문서 전체를 prev에 저장된 위치로 이동
			 $("html,body").stop().animate({
                 scrollTop:prev
                },800,"linear");
		//마우스 휠을 내렸을때	 
          }else if (wh < 0) {  
			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
             var next = $(this).next().offset().top;
             $('.depth1 li').eq(index+1).addClass('on')
            $('.depth1 li').eq(index+1).siblings().removeClass('on')
			 //문서 전체를 next에 저장된 위치로 이동
			 $("html,body").stop().animate({
                 scrollTop:next
                },800,"linear");                                         
          }
        
     });
     var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
//liIndex 인덱스로 구분해 한줄씩 가져옴

typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다

if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
//liIndex 인덱스로 구분해 한줄씩 가져옴

typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다

if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
  
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ //한문장이끝나면
     if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
          
          //1초후
          setTimeout(function(){
            //사용했던 변수 초기화
            typingBool = false; 
          liIndex=0;
          typingIdx=-0;
            
            //첫번째 문장으로 셋팅
          typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
               //타이핑 결과 모두 지우기
          $(".typing ul li").html("")
            
            //반복시작
            // tyInt = setInterval(typing,100);
          }, 1000);
          
          
        }
    } 
}  

 
})(jQuery)
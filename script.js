$(document).ready(function(){
	//cursor inverted
	var cursor = $('.cursor__circle');
	var hover = $('a');


	document.body.addEventListener('mousemove', onMouseMove);
	for (let i = 0; i < hover.length; i++) { hover[i].addEventListener('mouseenter', onMouseHover); hover[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	function onMouseMove(e) {
	  TweenMax.to(cursor, .4, {
		x: e.pageX - 32,
		y: e.pageY - 32
	  })
	}

	function onMouseHover() {
	  TweenMax.to(cursor, .4, {
		scale: 2
	  })
	}
	function onMouseHoverOut() {
	  TweenMax.to(cursor, .4, {
		scale: 1
	  })
	} 
	
	//window resize
	$(window).resize(function(){
		var fontSize = $(window).width()/1920*16;
		var aSize = $(window).width()/1920*12;
		/* if (fontSize < 16) {
			$('p, li').css('font-size',16);
		} else if (fontSize > 30) {
			$('p, li').css('font-size',30); 
		} else {
			$('p, li').css('font-size',fontSize);
		} */

		if ( aSize < 12) {
			$('a.view_btn, a.code_btn, small').css('font-size',12);
		} else if ( aSize > 16) {
			$('a.view_btn, a.code_btn, small').css('font-size',16);
		} else {
			$('a.view_btn, a.code_btn, small').css('font-size',aSize);
		}

		$('.section1 h1').css({
			top:($('.section1').height()/2) - ($('.section1 h1').height()/2) +40
		});

		$('.section8 p').css({
			top:($('.section8').height()/2) - ($('.section8 p').height()/2) + 70
		});

		//pc version에서만 onepage layout
		if ($(window).width()>1100) {
			new fullScroll({
				displayDots: false,
				dotsPosition: 'left',
				animateTime: 0.7,
				animateFunction: 'ease'
			});
		}
		
	});
	$(window).trigger('resize');
	
	

	//burger menu

	$('a.burger').click(function(e){
		e.preventDefault();
		$('a.burger').toggleClass('xmark');
		$('.clickmenu').fadeToggle();
		$('.clickmenu ul').css({
			top:($('.clickmenu').height()/2) - ($('.clickmenu ul').height()/2)
		});
	});

	$('.clickmenu ul li').click(function(){
		$('.clickmenu').fadeOut();
		$('a.burger').removeClass('xmark');
	});
	
	
	//mouse move event
	$('.section2').mousemove(function(e){
		
		var posX = e.pageX;
		var posY = e.pageY;

		$('.new').css({
			left:($(window).width()/7)-(posX/100),
			top:($(window).height()/7)-(posY/100)
		});
		$('.design').css({
			left:($(window).width()/11)+(posX/120),
			top:($(window).height()/2)+(posY/110)
		});
		$('.study').css({
			left:($(window).width()/6)-(posX/130),
			bottom:($(window).height()/10)-(posY/100)
		});
		$('.creative').css({
			left:($(window).width()/3)+(posX/200),
			top:($(window).height()/3)+(posY/200)
		});
		$('.hard').css({
			left:($(window).width()/2.5)-(posX/150),
			bottom:($(window).height()/9)-(posY/150)
		});
		$('.coding').css({
			right:($(window).width()/12)+(posX/250),
			top:($(window).height()/7)+(posY/250)
		});
		$('.trendy').css({
			right:($(window).width()/3)-(posX/200),
			top:($(window).height()/3)-(posY/200)
		});
		$('.digging').css({
			right:($(window).width()/15)-(posX/210),
			top:($(window).height()/1.4)-(posY/210)
		});
	});

	//clip board
	$('.section8 a').click(function(){
	  $('.section8 input').select();
	  document.execCommand('copy');
	  alert('메일 주소가 클립보드에 저장되었습니다 :)');
	});

	//graph animation
	$(window).on('mousewheel DOMMouseScroll',function(e){
		var loc = String(window.location);
		var locSize = loc.length-1;
		if (loc[locSize] == 2) {
			$('.section3 article ul.progress li span.bar_progress').addClass('active');
		} else {
			$('.section3 article ul.progress li span.bar_progress').removeClass('active');
		}

		if($('.section3').offset().top < 300 ) {
			$('.section3 article ul.progress li span.bar_progress').addClass('active');
		}

		//nav on(scroll)
		if (parseInt(loc[locSize]) >= 1 && parseInt(loc[locSize]) <= 2) {
			$('nav ul li').removeClass('on');
			$('nav ul li').eq(0).addClass('on');
		} else if (parseInt(loc[locSize]) >= 3 && parseInt(loc[locSize]) <= 6){
			$('nav ul li').removeClass('on');
			$('nav ul li').eq(1).addClass('on');
		} else if ( parseInt(loc[locSize]) == 7 ) {
			$('nav ul li').removeClass('on');
			$('nav ul li').eq(2).addClass('on');
		} else {
			$('nav ul li').removeClass('on');
		}
		
	});

	$('body').scroll(function(){
		if($('.section3').offset().top < $('body').scrollTop()) {
			$('.section3 article ul.progress li span.bar_progress').addClass('active');
		}
	});

	//nav on(click)
	$('nav ul li').click(function(){
		$('nav ul li').removeClass('on');
		$(this).addClass('on');
	});
});
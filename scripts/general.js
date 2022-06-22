(function ($) {
    $(document).ready(function () {
	
	//атрибуты для заглавия	
	$("svg").attr({
		"viewBox": "0 0 300 265",
		"x": "0px",
		"y": "0px",
		"width": "300px",
		"height": "300px",
		"enable-background": "new 0 0 279.355 279.357",
		"xml": 'space="preserve"',
		"version": "1.1",
		"xmlns": "http://www.w3.org/2000/svg"
		})
		
	$(".vau2 text").attr({
		'font-weight': "bold",
		'fill': "rgba(174,171,208,1)",
		'stroke': "#d40050",
		'stroke-width': "1",
		'font-family': "Monotype Corsiva",
		'font-size': "220px",
		'text-anchor': "middle",
		'dominant-baseline': "central",
		'x': "50%",
		'y': "50%"
	})
		
	/*динамика названий на главной*/
	if ($(window).width() > 950) {
		//блок лучших
		$('.dark',this).on('mouseover', function () {
			$('.newName',this).stop().animate({
                marginTop: '200px'		
            }, 500);
       });
	   $('.dark',this).on('mouseout', function () {
			$('.newName',this).stop().animate({
                marginTop: '225px'		
            }, 500);
       });
	   //блок быстрых
	   $('.dark').on('mouseover', function () {
			$('.newName4',this).stop().animate({
              marginTop: '165px'		
            }, 500);
       });
	  $('.dark').on('mouseout', function () {
		$('.newName4',this).stop().animate({
                 marginTop: '185px'		
            }, 500);
       });   	
	}	  
	   
	//подсветка меню
	let location = window.location.href;
    $('.nav.navbar-nav.navbar-center.myclass li').each(function () {
        var link = $(this).find('a').attr('href');
        if (location == link) {
            $(this).addClass('current');
        }
    });   
	   
	
	//сокрытие и показ табов (советы)

	$(window).ready(function() {	
		if ( $(window).width() < 440) {
			$('.adviceNew').css('display','none');
			$('.advMob').css('display','block');
		}
		else{
			$('.adviceNew').css('display','block');
			$('.advMob').css('display','none');
		}	
	})	
	   
	//равнение высот советов и убираем линию последнего совета
	let a = $('.imgArticle').height();
	let b = $('.shortArticleDescr').height();
	
	if(a>b){
		$('.articleBlock').height(a)
		
	} else{
		$('.articleBlock').height(b)
	}

	$('.art:last').css('border-bottom', 'none');	
	   
	    
	//страница общих рецептов нужного формата
	$('#primary, #true-side').wrapAll('<div class="new">');
	
	//каретка и высоты бокового меню
	if($("#accordeconck2 li span").hasClass("toggler_icon")){
		$("#accordeconck2 li .toggler a").append('<b class="caret"></b>'); 
	}
	var s=$( '.menu333 li' ).height();
	$( '#accordeon-menu-ck-2 .widget-title').css('height',s);
		
	//стилизация конкретного рецепта	
	$( '.wprm-template-chic-buttons.wprm-container-columns-spaced-middle.wprm-container-columns-gutter a').removeAttr("style");		
	$( '.wprm-template-chic-buttons.wprm-container-columns-spaced-middle.wprm-container-columns-gutter a:first-child').css("background",'#aeabd0').css('color',"#fff");		
	$( '.wprm-template-chic-buttons.wprm-container-columns-spaced-middle.wprm-container-columns-gutter a:nth-child(2)').css('display','none');
	
	
		
	});
})(jQuery);

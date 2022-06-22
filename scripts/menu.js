(function ($) {
    $(document).ready(function () {
	  
	//мини меню для главной
	$('.toglerMenu2').click(function(){
		$('.minik').slideToggle(300);
	})

	if ($(window).width() < 850) {
		$('.toglerMenu2').css('display','flex')
		$('.menublock').css('display','none')		
	}
	if ($(window).width() >= 850 ) {
		$('.toglerMenu2,.minik').css('display','none')
		$('.menublock').css('display','block')
	}	
	
	//мини боковое общие моменты
	var s=`<i class="fa fa-bars sideMini"></i>`
	var s2=`<i class="fa fa-times sideMini2"></i>`
	$('#true-side').prepend(s);
	$('#accordeon-menu-ck-2 h3').append(s2);
	
	//мини боковое меню при загрузке
	$(window).ready(function() {			
		if ( $(window).width() < 790) {
			$('#accordeon-menu-ck-2').css('display','none');
			$('#true-side').css('width','10%');
			$('#primary').css('width','90%').css('position','relative');
			$('.fa.fa-bars.sideMini').css('display','block');

			$('.sideMini').click(function(){
				var style1={
					'display':'block',
					'width':'400%',
					'z-index':'10000',
					'position':'relative',
					'height':'600px',
					'background':'#d3d3d3',
					'margin-top':'-6px'
				}
				$('#accordeon-menu-ck-2').css(style1);
				$('.sideMini2').css('display','block')
				$('.sideMini').css('display','none')
			})
				
			$('.widget-title i').click(function(){
				$('#accordeon-menu-ck-2,.sideMini2').css('display','none');
				$('.sideMini').css('display','block');	
			})			
		} 
	
	})
			
	});
})(jQuery);


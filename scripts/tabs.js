(function ($) {
    $(document).ready(function () {  
	//табы (советы на главной)	
		
	function hideTabContent() {
		$( ".tabcontent2" ).each(function() {
 			$(this).addClass('hide');
			$(this).removeClass('activeContent','fade');
		});
		$( ".adviceHeader__item" ).each(function() {
 			$(this).removeClass('activeHeader');
		});		
	}
        
	function showTabContent(i = 0) {
		var arr1=$( ".tabcontent2" );
		var a=arr1[i];
        a.classList.add('activeContent','fade');
        a.classList.remove('hide');
        $( ".adviceHeader__item" )[i].classList.add('activeHeader');		
    }
    
    hideTabContent();
    showTabContent();
		
	$('.adviceHeader__items').on('click',function(){
		const target = event.target;
		if(target && target.classList.contains('adviceHeader__item')) {
			$( ".adviceHeader__item" ).each(function(index,element) {
				if (target == element) {
                    hideTabContent();
                    showTabContent(index);
                }
			});
		}	
	})   
	   
	
	});
})(jQuery);


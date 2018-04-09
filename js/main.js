$(document).ready(function(){
	$('#socialMediaIcons a').css('color','#FFFFFF')
	var scroll_start = 0;
	var startchange = $(' #portfolio');
	var offset = startchange.offset();
		if(startchange.length){

		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start>offset.top){
				$('#chisu').css('color','#006284')
				$('#socialMediaIcons a').css('color','#006284')
			}else{
				$('#chisu').css('color','#FFFFFF')
				$('#socialMediaIcons a').css('color','#FFFFFF')
			}
		});
		}
});
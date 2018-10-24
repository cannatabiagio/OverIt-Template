$(window).resize(function(){
	if($(window).width()<767){
		$(".sidebar-toggle").show();
	}else{
		$(".sidebar-toggle").hide();
	}
});

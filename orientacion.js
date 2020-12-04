(function($){
	$(document).ready(function() {
		$('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child',window.parent.document).text('');
		$('.widget-header [data-aid="HAMBURGER_MENU_LINK"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).toggleClass('Sandshow');});
		$('.widget-header [data-ux="CloseIcon"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).removeClass('Sandshow');});
		if ($('.newGrup', window.parent.document).length<1){
		$( ".widget-content-content-9", window.parent.document).wrapAll("<div class='newGrup' />");
		}
		$(".widget-html-html-1 iframe", window.parent.document).before('<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/animate.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/helbeticaBQ.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&family=Bree+Serif&display=swap"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/orientacion.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/foter.min.css"/>');
	});
})(jQuery);

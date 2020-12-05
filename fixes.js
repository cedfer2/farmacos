(function($){
	$(document).ready(function() {
		if ($('.polyfi', window.parent.document).length<1)
		{
			$('head', window.parent.document).prepend('<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.js"></script></script>');
		}
		$('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child',window.parent.document).text('');
		$('.widget-header [data-aid="HAMBURGER_MENU_LINK"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).toggleClass('Sandshow');});
		$('.widget-header [data-ux="CloseIcon"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).removeClass('Sandshow');});
});
})(jQuery);

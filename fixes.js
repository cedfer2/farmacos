var script = document.createElement("script");
script.type="text/javascript";
script.crossorigin="anonymous";
script.src="https://polyfill.io/v3/polyfill.js";
window.parent.document.getElementsByTagName('head')[0].prepend(script);

(function($){
	$(document).ready(function() {
		$('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child',window.parent.document).text('');
		$('.widget-header [data-aid="HAMBURGER_MENU_LINK"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).toggleClass('Sandshow');});
		$('.widget-header [data-ux="CloseIcon"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).removeClass('Sandshow');});
});
})(jQuery);

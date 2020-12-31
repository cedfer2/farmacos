function InjeectDepend(src){
var script = window.parent.document.createElement("script");
script.type="text/javascript";
script.crossorigin="anonymous";
script.src=src;
window.parent.document.getElementsByTagName('head')[0].prepend(script);
window.console.log('inse', src);
}
InjeectDepend("https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver");
InjeectDepend("https://polyfill.io/v3/polyfill.js");
InjeectDepend("https://cedfer2.github.io/farmacos/polyfill-ie11-nodelist-foreach.js");
InjeectDepend("https://cedfer2.github.io/farmacos/querySelectorpolyfill.js");



(function($){
	$(document).ready(function() {
		$('head').prepend('<meta http-equiv="Content-Security-Policy" content="default-src self; img-src https://*; child-src none;">');
		$('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child',window.parent.document).text('');
		$('.widget-header [data-aid="HAMBURGER_MENU_LINK"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).toggleClass('Sandshow');});
		$('.widget-header [data-ux="CloseIcon"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).removeClass('Sandshow');});
});
})(jQuery);

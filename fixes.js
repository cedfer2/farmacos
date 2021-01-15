function InjeectDepend(src){
var script = window.parent.document.createElement("script");
script.type="text/javascript";
script.crossorigin="anonymous";
script.src=src;
window.parent.document.getElementsByTagName('head')[0].prepend(script);
window.console.log('inse', src);
}
InjeectDepend("https://cedfer2.github.io/farmacos/polyfill-ie11-nodelist-foreach.js");
InjeectDepend("https://cedfer2.github.io/farmacos/querySelectorpolyfill.js");



(function($){
	$(document).ready(function() {
		$('head').prepend('<meta http-equiv="Content-Security-Policy" content="default-src self; img-src https://*; child-src none;">');
		$('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child, [data-page="376f0a25-ff0d-4a94-941c-9505a56f1068"]',window.parent.document).text('');
		$('.widget-header [data-aid="HAMBURGER_MENU_LINK"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).toggleClass('Sandshow');});
		$('.widget-header [data-ux="CloseIcon"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).removeClass('Sandshow');});
console.log('fixer remover');
	});
})(jQuery);

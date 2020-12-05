(function($) {
console.log('loaded jQuery');
var url = "https://cedfer2.github.io/farmacos/";
var folder ="medicamentos/";
var fotodir ="medi/";
var img = [];
var modalImage = [];

img = {
0: ["a1", "a2", "a3", "a4"],
1: ["b1", "b2", "b3", "b4"],
2: ["c1", "c2", "c3", "c4"],
3: ["d1", "d2", "d3", "d4", "d5", "d6"]
};

modalImage = {
0: {src: url+"higiene.svg"},
1: {src: url+"abarrote.svg"},
2: {src: url+"limpieza.svg"},
3: {src: url+"embt.svg"},
}
	
if ($('.polyfi', window.parent.document).length<1)
{
	$('head', window.parent.document).prepend('<script class="polyfi" crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry%2CIntl%2Cblissfuljs%2Cdefault%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2Ces5%2Ces6%2Ces7%2CAbortController%2CArray.from%2CArray.isArray%2CArray.prototype.%40%40iterator%2CArray.prototype.copyWithin%2CArray.of%2CArray.prototype.entries%2CArray.prototype.every%2CArray.prototype.fill%2CArray.prototype.filter%2CArray.prototype.find%2CArray.prototype.findIndex%2CArray.prototype.flat%2CArray.prototype.flatMap%2CArray.prototype.forEach%2CArray.prototype.includes%2CArray.prototype.indexOf%2CArray.prototype.keys%2CArray.prototype.lastIndexOf%2CArray.prototype.map%2CArray.prototype.reduce%2CArray.prototype.reduceRight%2CArray.prototype.some%2CArray.prototype.sort%2CArray.prototype.values%2CArrayBuffer%2CAudioContext%2CBlob%2CCSS.supports%2CCustomEvent%2CDOMRect%2CDOMTokenList%2CDOMTokenList.prototype.%40%40iterator%2CDataView%2CDate.now%2CDate.prototype.toISOString%2CDocumentFragment%2C%7Eviewport%2C%7Ehtml5-elements%2Cwindow.scrollBy%2Cwindow.scroll%2Cviewport%2Csmoothscroll%2CsetImmediate%2CscrollY%2CscrollX%2CscrollIntoView%2CscrollBy%2Cscroll%2Cscreen.orientation%2CrequestIdleCallback%2CrequestAnimationFrame%2CqueueMicrotask%2Cperformance.now%2CpageYOffset%2CpageXOffset%2Cnavigator.sendBeacon%2Cnavigator.geolocation%2CmatchMedia%2Clocation.origin%2ClocalStorage%2CinnerWidth%2CinnerHeight%2Chtml5shiv%2CglobalThis%2CgetComputedStyle%2Cfetch%2Cdom4%2Cdocument.visibilityState%2Cdocument.querySelector%2Cdocument.head%2Cdocument.getElementsByClassName%2Cdocument.currentScript%2Cdocument%2CdevicePixelRatio%2Ccss_fq%2Cconsole.warn%2Cconsole.trace%2Cconsole.timelineEnd%2Cconsole.timeline%2Cconsole.timeStamp%2Cconsole.timeEnd%2Cconsole.time%2Cconsole.table%2Cconsole.profiles%2Cconsole.profileEnd%2Cconsole.profile%2Cconsole.markTimeline%2Cconsole.log%2Cconsole.info%2Cconsole.groupEnd%2Cconsole.groupCollapsed%2Cconsole.group%2Cconsole.exception%2Cconsole.error%2Cconsole.dirxml%2Cconsole.dir%2Cconsole.debug%2Cconsole.count%2Cconsole.clear%2Cconsole.assert%2Cconsole%2Catob%2CXMLHttpRequest%2CWindow%2CWebAnimations%2CWeakSet%2CWeakMap%2CUserTiming%2CUint8Array%2CUint8ClampedArray%2CUint32Array%2CUint16Array%2CURLSearchParams%2CURL%2CTextEncoder%2CTextDecoder%2CSymbol.unscopables%2CSymbol.toStringTag%2CSymbol.toPrimitive%2CSymbol.split%2CSymbol.species%2CSymbol.search%2CSymbol.replace%2CSymbol.prototype.description%2CSymbol.match%2CSymbol.keyFor%2CSymbol.iterator%2CSymbol.isConcatSpreadable%2CSymbol.hasInstance%2CSymbol.for%2CSymbol.asyncIterator%2CSymbol%2CString.raw%2CString.prototype.trimStart%2CString.prototype.trimEnd%2CString.prototype.trim%2CString.prototype.sup%2CString.prototype.sub%2CString.prototype.strike%2CString.prototype.startsWith%2CString.prototype.small%2CString.prototype.repeat%2CString.prototype.padStart%2CString.prototype.padEnd%2CString.prototype.normalize%2CString.prototype.link%2CString.prototype.italics%2CString.prototype.includes%2CString.prototype.fontsize%2CString.prototype.fontcolor%2CString.prototype.fixed%2CString.prototype.endsWith%2CString.prototype.codePointAt%2CString.prototype.bold%2CString.prototype.blink%2CString.prototype.big%2CString.prototype.anchor%2CString.prototype.%40%40iterator%2CString.fromCodePoint%2CSet%2CResizeObserver%2CRegExp.prototype.flags%2CReflect.setPrototypeOf%2CReflect.set%2CReflect.preventExtensions%2CReflect.ownKeys%2CReflect.isExtensible%2CReflect.has%2CReflect.getOwnPropertyDescriptor%2CReflect.getPrototypeOf%2CReflect.get%2CReflect.deleteProperty%2CReflect.defineProperty%2CReflect.construct%2CReflect.apply%2CReflect%2CPromise.prototype.finally%2CPromise%2CPageVisibility%2CObject.values%2CObject.setPrototypeOf%2CObject.seal%2CObject.preventExtensions%2CObject.keys%2CObject.isSealed%2CObject.isFrozen%2CObject.isExtensible%2CObject.is%2CObject.getPrototypeOf%2CObject.getOwnPropertySymbols%2CObject.getOwnPropertyNames%2CObject.getOwnPropertyDescriptors%2CObject.getOwnPropertyDescriptor%2CObject.fromEntries%2CObject.freeze%2CObject.entries%2CObject.defineProperty%2CObject.defineProperties%2CObject.create%2CObject.assign%2CNumber.parseInt%2CNumber.parseFloat%2CNumber.isSafeInteger%2CNumber.isNaN%2CNumber.isInteger%2CNumber.isFinite%2CNumber.MIN_SAFE_INTEGER%2CNumber.MAX_SAFE_INTEGER%2CNumber.Epsilon%2CNumber.EPSILON%2CNodeList.prototype.forEach%2CNodeList.prototype.%40%40iterator%2CNode.prototype.contains%2CNavigator.prototype.geolocation%2CMutationObserver%2CMath.trunc%2CMath.tanh%2CMath.sinh%2CMath.sign%2CMath.log2%2CMath.log1p%2CMath.log10%2CMath.imul%2CDocument%2CDocumentFragment.prototype.append%2CDocumentFragment.prototype.prepend%2CElement%2CElement.prototype.after%2CElement.prototype.append%2CElement.prototype.before%2CElement.prototype.classList%2CElement.prototype.cloneNode%2CElement.prototype.closest%2CElement.prototype.dataset%2CElement.prototype.inert%2CElement.prototype.matches%2CElement.prototype.nextElementSibling%2CElement.prototype.placeholder%2CElement.prototype.prepend%2CElement.prototype.previousElementSibling%2CElement.prototype.remove%2CElement.prototype.replaceWith%2CElement.prototype.scroll%2CElement.prototype.scrollBy%2CElement.prototype.scrollIntoView%2CElement.prototype.toggleAttribute%2CEvent%2CEvent.focusin%2CEvent.hashchange%2CEventSource%2CFloat32Array%2CFloat64Array%2CFunction.name%2CFunction.prototype.bind%2CFunction.prototype.name%2CHTMLCanvasElement.prototype.toBlob%2CHTMLCanvasElement.protoype.toBlob%2CHTMLDocument%2CHTMLPictureElement%2CHTMLTemplateElement%2CInt16Array%2CInt32Array%2CInt8Array%2CIntl.DateTimeFormat%2CIntl.DateTimeFormat.prototype.formatToParts%2CIntl.DisplayNames%2CIntl.ListFormat%2CIntl.PluralRules%2CIntl.NumberFormat%2CIntl.RelativeTimeFormat%2CIntl.getCanonicalLocales%2CJSON%2CMap%2CMath.acosh%2CMath.asinh%2CMath.atanh%2CMath.cbrt%2CMath.cosh%2CMath.clz32%2CMath.expm1%2CMath.fround%2CMath.hypot"></script>');
}
	
$('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child',window.parent.document).text('');
$('.widget-html-html-1 iframe', window.parent.document).before('<link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/helbeticaBQ.css"><link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Roboto&family=Bree+Serif&display=swap"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/animate.min.css"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/magnific-popup.css"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/slick.css"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/foter.min.css"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/autoserv.min.css">');
$('.widget-header [data-aid="HAMBURGER_MENU_LINK"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).toggleClass('Sandshow');});
$('.widget-header [data-ux="CloseIcon"]', window.parent.document).click(function(){$('[data-ux="NavigationDrawer"]', window.parent.document).removeClass('Sandshow');});

$('#f3debd43-7451-4d00-8ba7-80cea5303013 [data-ux=ContentCardWrapperImage], #938a81c2-5f0e-4d49-bc7b-6d80829e0c3c [data-ux=ContentCardWrapperImage], #f29f933f-8af8-42c6-91f8-6f24bd104cbc [data-ux=ContentCardWrapperImage]', window.parent.document).addClass('InserCatImagePop');
$('#9ed231d9-9989-40b5-b5cc-ca0f6668e16a [data-ux="Grid"] > [data-ux="GridCell"]', window.parent.document).last().addClass('InserCatImagePop');

if($('#938a81c2-5f0e-4d49-bc7b-6d80829e0c3c .InserCatImagePop', window.parent.document).length>0){
	img = {
		0: [fotodir+"0/0", fotodir+"0/1", fotodir+"0/2", fotodir+"0/3"],
		1: [fotodir+"1/0", fotodir+"1/1", fotodir+"1/2", fotodir+"1/3"],
		2: [fotodir+"2/0", fotodir+"2/1", fotodir+"2/2", fotodir+"2/3"],
		5: [fotodir+"3/0", fotodir+"3/1", fotodir+"3/2", fotodir+"3/3"],
		3: [fotodir+"4/0", fotodir+"4/1", fotodir+"4/2", fotodir+"4/3"],
		4: [fotodir+"5/0", fotodir+"5/1", fotodir+"5/2", fotodir+"5/3"],
	};


	modalImage = {
		0: [{src: url+folder+"0_0.svg"}, {src: url+folder+"0_1.svg"}, {src: url+folder+"0_2.svg"}, {src: url+folder+"0_3.svg"}],
		1: {src: url+folder+"1.svg"},
		2: {src: url+folder+"2.svg"},
		5: {src: url+folder+"3.svg"},
		3: {src: url+folder+"4.svg"},
		4: {src: url+folder+"5.svg"}
	}
}

$(".InserCatImagePop", window.parent.document).each(function(y, t) {
	if ($('#bricks-' + y, window.parent.document).length<1){
		$(t).after('<div class=wrappinner><div id=bricks-' + y + ' class="galeripek ImgContPa' + y + '"></div></div><div class="c"><div class=b phath=' + y + '><a href="#" id="btn-' + y + '" phath=' + y + ' class="sppb-btn"><i class="fa fa-lg fa-chevron-down" aria-hidden="true"></i></a></div></div>');
		$('#bricks-' + y, window.parent.document).each(function(index, elemento) {
			if ($($(elemento).children()).length < 1) {
				$(elemento).append(function() {
					return ($.map(img[y], function(ell, ind) {
						return '<div class=ImgContainer data-ux=GridCell data-aid=GALLERY_IMAGE' + y + '_CELL_RENDERED><img src="' + url + ell + '.svg" alt=image' + ind + ' data-ux=Image data-aid=GALLERY_IMAGE' + ind + '_RENDERED class="imgcel' + y + ' x-el x-el-img c2-1 c2-2 c2-1w c2-1h c2-2b c2-2c c2-1q c2-1s c2-18 c2-f c2-2d c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"></div>';
						})).join(' ');
					}).magnificPopup({
						prependTo: $('body', window.parent.document),
						items: modalImage[y],
						gallery: {enabled: true},
						type: 'image'
					}).on('mfpOpen', function() {
						$('.mfp-bg, .mfp-wrap',window.parent.document).removeAttr('style');
					});
					console.log('elemento select:', $(elemento));
					console.log('modalSelect select:', modalImage[y]);
			} else {
				console.log("elemento hijo:", $($(elemento).children()));
			}
		})
	}
});
$('.b .sppb-btn', window.parent.document).click(function(k) { k.preventDefault();
    $(k.currentTarget).closest('.c').siblings('.wrappinner').find('.galeripek').trigger('click');
});
if ($('.widget-introduction-introduction-1 #bs-3', window.parent.document).length < 1)
{
	$('.widget-gallery-gallery-3 #bs-3',window.parent.document).ready(function($) {
		$('.widget-gallery-gallery-3 #bs-3', window.parent.document).appendTo($('.widget-introduction-introduction-1 [data-ux="GridCell"]:first-child', window.parent.document));
		$('#bs-3 .carousel-track', window.parent.document).removeAttr('style');
		$('#bs-3 [data-ux="CarouselButtonPrevious"]', window.parent.document).trigger('click');
		$('.widget-introduction-introduction-1 [data-ux="GridCell"]:first-child, .widget-gallery-gallery-3', window.parent.document).children('[data-ux="Block"]:first-child').hide();
	});
}else{
	console.log('widget3:', $('.widget-introduction-introduction-1 #bs-3', window.parent.document));
}
if ($('widget-content-content-3 #insertIm', window.parent.document).length < 1){
$('.widget-content-content-3 [data-ux="GridCell"]:first-child [data-ux="ContentCard"]', window.parent.document).children().first().before('<div id="insertIm" data-ux="ContentCardWrapperImage" class="x-el x-el-div c1-1 c1-2 c1-2e c1-x c1-y c1-2n c1-b c1-c c1-d c1-e c1-f c1-g"><span data-ux=Element class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"><img data-ux="Image" class="x-el x-el-img c1-1 c1-2 c1-11 c1-2v c1-x c1-y c1-1c c1-1e c1-30 c1-b c1-c c1-84 c1-d c1-e c1-f c1-g" src=//img1.wsimg.com/isteam/ip/8c8d2569-664c-4b65-afe4-6f68234dd79f/w6.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true /></span></div>');
}

console.log('fainal jquery');
})(jQuery);

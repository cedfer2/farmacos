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
3: {src: url+"noImg.jpg"},
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
		3: [fotodir+"3/0", fotodir+"3/1", fotodir+"3/2", fotodir+"3/3"],
		4: [fotodir+"4/0", fotodir+"4/1", fotodir+"4/2", fotodir+"4/3"],
		5: [fotodir+"5/0", fotodir+"5/1", fotodir+"5/2", fotodir+"5/3"],
	};

/*
	modalImage = {
		0: [{src: url+folder+"0_0.svg"}, {src: url+folder+"0_1.svg"}, {src: url+folder+"0_2.svg"}, {src: url+folder+"0_3.svg"}],
		1: {src: url+folder+"1.svg"},
		2: {src: url+folder+"2.svg"},
		3: {src: url+folder+"3.svg"},
		4: {src: url+folder+"4.svg"},
		5: {src: url+folder+"5.svg"}
	}
*/
	modalImage = {
		0:{
			0: {src: url+folder+"0_0.svg"},
			1: {src: url+folder+"0_1.svg"},
			2: {src: url+folder+"0_2.svg"},
			3: {src: url+folder+"0_3.svg"},
		},
		1: {src: url+folder+"1.svg"},
		2: {src: url+folder+"2.svg"},
		3: {src: url+folder+"3.svg"},
		4: {src: url+folder+"4.svg"},
		5: {src: url+folder+"5.svg"}
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

console.log('fainal jquery');
})(jQuery);

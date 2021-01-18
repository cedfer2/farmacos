(function($){
	$("body", window.parent.document).append('<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Bree+Serif&display=swap" rel="stylesheet"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/slick.css"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/slick-theme.css"><link rel="stylesheet" type=text/css href="https://cedfer2.github.io/farmacos/fuentes/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/animate.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/foter.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/inicio.min.css"/>');
var url = "https://cedfer2.github.io/farmacos/inicio/";
var items = ['banner1.jpg','banner2.jpg','banner4.jpg'];
if ($('.widget-header-header-9 [data-ux="HeaderMedia"] .slider', window.parent.document).length < 1)
{
$('.widget-header-header-9 [data-ux="HeaderMedia"]', window.parent.document).empty().prepend("<div id=#bs-3 class='slider theme1' />");
$(items).each(function(index, el) {
$('.slider', window.parent.document).append('<div><img class="imgSliItem" src="'+url+el+'"/> </div>');
/*$('.slider', window.parent.document).append('<object type="image/svg+xml" data="'+url+el+'"/> </div>');*/
});
$('.slider', window.parent.document).slick({ arrows: true, dots: true, touchMove: true, infinite: true, fade: true, cssEase: 'linear', slidesToShow: 1, slidesToScroll: 1, autoplay: true,
  prevArrow:"<a role='button' class='slick-prev pull-left sppb-btn sppb-btn-link '><i class='fa fa-2x fa-chevron-left' aria-hidden='true'></i></button>",
  nextArrow:"<a role='button' class='slick-next pull-right sppb-btn sppb-btn-link'><i class='fa fa-2x fa-chevron-right' aria-hidden='true'></i></button>",
  customPaging: function(slider, i) { return "<a role='button' class='paging sppb-btn sppb-btn-flat'>" + "<i class='faIndic fa fa-lg'></i></button>"; }
});
$(window).resize(function () {
	$('.slider', window.parent.document).not('.slick-initialized').slick('resize');
}).on('orientationchange', function () {
    $('.js-slider', window.parent.document).not('.slick-initialized').slick('resize');
});
}else{
	console.log('slick:', $('.widget-header-header-9 [data-aid="HEADER_SLIDESHOW"] .slider', window.parent.document));
}
})(jQuery);

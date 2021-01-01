(function($){
	$(document).ready(function() {
		if ($('.newGrup', window.parent.document).length<1){
			$( ".widget-content-content-9", window.parent.document).wrapAll("<div class='newGrup' />");
			$.each($('.widget-content-content-9 [data-ux="ContentCards"] [data-ux="GridCell"]:not(:first-child) > [data-ux="ContentCard"]',window.parent.document), function(index, el) {
				if ($(el).children('[data-ux="ContentCardWrapperImage"]').length>0)
				{
					$(el).addClass('row v-center reverse thumnn');
					$(el).children('[data-ux="ContentCardText"], [data-ux="Block"]').wrapAll('<div class="extra-wrapper"></div>');
				}
			});
		}
		$("body", window.parent.document).append('<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/animate.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/helbeticaBQ.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&family=Bree+Serif&display=swap"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/orientacion.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/foter.min.css"/>');
	});
})(jQuery);

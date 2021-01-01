(function($){
	$(document).ready(function() {
		$( ".widget-contact-contact-9", window.parent.document).wrapAll("<div class='new' />");
		$('.widget-content-content-7 [data-ux="Block"] [data-aid="CONTENT_IMAGE1_RENDERED"]',window.parent.document).removeAttr('srcset').attr('src', 'https://cedfer2.github.io/farmacos/cont.svg'); $("body", window.parent.document).append('<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/animate.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/helbeticaBQ.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&family=Bree+Serif&display=swap"><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/contactanos.min.css"/><link rel="stylesheet" type="text/css" href="https://cedfer2.github.io/farmacos/foter.min.css"/>');
		if ($('.widget-contact-contact-9:first-Child .telCentro', window.parent.document).length<1)
		{
			$('.widget-contact-contact-9 [data-aid=CONTACT_INFO_ADDRESS_REND]+[data-ux=ContentText]', window.parent.document).addClass('innerTel');
			$('.widget-contact-contact-9 [data-aid="CONTACT_INFO_PHONE_REND"]', window.parent.document).parent('[data-typography="BodyAlpha"]').addClass('telCentro');
			$('.widget-contact-contact-9 [data-aid="CONTACT_HOURS_TITLE_REND"]', window.parent.document).parent('[data-ux="Block"]').addClass('RelogCentro');
			$('.widget-contact-contact-9 [data-aid="CONTACT_INTRO_DESC_REND"]', window.parent.document).addClass('whatsCentro');
			$('.widget-contact-contact-9 .RelogCentro', window.parent.document).parent('[data-ux="Block"]').addClass('remove');
			$('.widget-contact-contact-9:first-Child [data-aid="CONTACT_INFO_BIZ_NAME_REND"], .widget-contact-contact-9:first-Child [data-aid="CONTACT_INFO_ADDRESS_REND"]', window.parent.document).wrapAll('<div class="ddirCentro"></div>');
			$('.widget-contact-contact-9:last-Child [data-aid="CONTACT_INFO_BIZ_NAME_REND"], .widget-contact-contact-9:last-Child [data-aid="CONTACT_INFO_ADDRESS_REND"]', window.parent.document).wrapAll('<div class="ddirCentro"></div>');
			$('.widget-contact-contact-9:last-Child .innerTel', window.parent.document).append($('#6bda68c0-32f3-4be1-af1c-fdd6e1c39d82 [data-aid="CONTENT_WELCOME_DESCRIPTION_RENDERED"]', window.parent.document));			
			$('.widget-contact-contact-9:last-Child .innerTel', window.parent.document).before($('.widget-contact-contact-9:last-Child .RelogCentro', window.parent.document));
			$('.widget-contact-contact-9:first-Child .telCentro', window.parent.document).before($('.widget-contact-contact-9:first-Child .RelogCentro', window.parent.document));
			$('.widget-contact-contact-9:last-Child .innerTel', window.parent.document).after($('.widget-contact-contact-9:last-Child .whatsCentro', window.parent.document));
			$('#6bda68c0-32f3-4be1-af1c-fdd6e1c39d82, .remove', window.parent.document).remove();
		}
	});
})(jQuery);

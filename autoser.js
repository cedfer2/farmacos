(function($){
	$(".widget-html-html-1 iframe",window.parent.document).ready(function(){
	console.log('loaded jQuery new');
	$(window.parent.document).ready(function(){
	var url = "https://cedfer2.github.io/farmacos/";
	var img = {0:["a1", "a2", "a3","a4"], 1:["b1", "b2", "b3","b4"], 2:["c1", "c2", "c3","c4"]};
	
	$("[id=f3debd43-7451-4d00-8ba7-80cea5303013] [data-ux=ContentCardWrapperImage]", window.parent.document).each(function(y,t){
		$(t).before('<div class=wrappinner><div id=bricks-'+y+' class="galeripek ImgContPa'+y+'"></div></div><div class=b phath='+y+'><a href="#" id="btn-'+y+'" phath='+y+' class="sppb-btn"><i class="fa fa-lg fa-chevron-down" aria-hidden="true"></i></a></div>');
			$('#bricks-'+y, window.parent.document).each(function(index,elemento){
				if ($($(elemento).children()).length<1){
					$(elemento).append(function(){
						return ($.map(img[y], function(ell,ind) {
							return '<div class=ImgContainer data-ux=GridCell data-aid=GALLERY_IMAGE'+y+'_CELL_RENDERED><img src="'+url+ell+'.svg" alt=image'+ind+'data-ux=Image data-aid=GALLERY_IMAGE'+ind+'_RENDERED class="x-el x-el-img c2-1 c2-2 c2-1w c2-1h c2-2b c2-2c c2-1q c2-1s c2-18 c2-f c2-2d c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"></div>';
							})).join(' ');
						});
						$('#f3debd43-7451-4d00-8ba7-80cea5303013 #btn-'+y, window.parent.document).on('click', window.parent.document,function(e){
							e.preventDefault();
							$('.widget-gallery-gallery-2:eq('+$(e.target).closest('phath').attr('phath')+') [data-ux="GridCell"]', window.parent.document).trigger('click');
							console.log($(e.target).closest('[phath]').attr('phath'));
						});
				}else{
					console.log($($(elemento).children()));
				}
			});
	});


	console.log('finnis jquery new');
	});
	});
})(jQuery);

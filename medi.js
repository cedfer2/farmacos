(function() {
$.each($('[data-ux="SectionHeading"] .x-el-span', window.parent.document),function(e,y){
	if($('#bricks-'+$(y).text().trim(), window.parent.document).length<1){
		$(y).before('<div id=bricks-'+$(y).text().trim()+' class="galeripek ImgContPa'+$(y).text().trim()+'"></div>')
		.before('<div class="c"><div class="b" phath="'+$(y).text().trim()+'"><a href="#" id="btn-'+$(y).text().trim()+'" phath="'+$(y).text().trim()+'" class="sppb-btn"><i phath='+$(y).text().trim()+' class="fa fa-x2 fa-chevron-down" aria-hidden="true"></i></a></div></div>');
	}
});

var url ="https://cedfer2.github.io/farmacos/";
var json = "medi.json";
var ell ="medi/";
$.getJSON(url+json)
  .done(function( json ) {
  	$.map( json, function(val, key ) {  			
  			$.each(val,function(index, el) {
  				console.log(key+":"+el);
  				$('#bricks-'+key, window.parent.document).append('<div class=ImgContainer data-ux=GridCell data-aid=GALLERY_IMAGE'+key+'_CELL_RENDERED><img src="'+url+ell+key+"/"+el+'.svg" alt=image'+key+' data-ux=Image data-aid=GALLERY_IMAGE'+key+'_RENDERED class="x-el x-el-img c2-1 c2-2 c2-1w c2-1h c2-2b c2-2c c2-1q c2-1s c2-18 c2-f c2-2d c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"></div>');
  			});
  	});
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
})(jQuery);

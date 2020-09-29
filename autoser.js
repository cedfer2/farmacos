(function($) {
        console.log('loaded jQuery');
            var url = "https://cedfer2.github.io/farmacos/";
            var img = {
                0: ["a1", "a2", "a3", "a4"],
                1: ["b1", "b2", "b3", "b4"],
                2: ["c1", "c2", "c3", "c4"]
            };
            $("[id=f3debd43-7451-4d00-8ba7-80cea5303013] [data-ux=ContentCardWrapperImage]", window.parent.document).each(function(y, t) {
                $(t).before('<div class=wrappinner><div id=bricks-' + y + ' class="galeripek ImgContPa' + y + '"></div></div><div class=b phath=' + y + '><a href="#" id="btn-' + y + '" phath=' + y + ' class="sppb-btn"><i class="fa fa-lg fa-chevron-down" aria-hidden="true"></i></a></div>');
                $('#bricks-' + y, window.parent.document).each(function(index, elemento) {
                    if ($($(elemento).children()).length < 1) {
                        $(elemento).append(function() {
                            return ($.map(img[y], function(ell, ind) {
                                return '<div class=ImgContainer data-ux=GridCell data-aid=GALLERY_IMAGE' + y + '_CELL_RENDERED><img src="' + url + ell + '.svg" alt=image' + ind + 'data-ux=Image data-aid=GALLERY_IMAGE' + ind + '_RENDERED class="x-el x-el-img c2-1 c2-2 c2-1w c2-1h c2-2b c2-2c c2-1q c2-1s c2-18 c2-f c2-2d c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"></div>';
                            })).join(' ');
                        });
                    } else {
                        console.log($($(elemento).children()));
                    }
                });
            });
            if ($('#69f49627-4d28-4287-b65c-a11ca61db769 #bs-3', window.parent.document).length < 1) {
                console.log('removed');
                $('#69f49627-4d28-4287-b65c-a11ca61db769 [data-ux="GridCell"]:first-child', window.parent.document).children('[data-ux="Block"]').remove()
                $('#395fe572-d3cf-4c61-bc88-c50a78e0f680 #bs-3', window.parent.document).addClass('movedCarr')
                .appendTo($('#69f49627-4d28-4287-b65c-a11ca61db769 [data-ux="GridCell"]:first-child', window.parent.document));
                $('#bs-3 .carousel-track', window.parent.document).removeAttr('style');
                $('#bs-3 [data-ux="CarouselButtonPrevious"]', window.parent.document).trigger('click');
                $('#395fe572-d3cf-4c61-bc88-c50a78e0f680', window.parent.document).remove();
            }
            console.log('finenn jquery');
})(jQuery);

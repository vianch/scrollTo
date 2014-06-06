function scrollTo( _DOMObjectTarget, _speed ){
            
	            var menuOffset =  parseInt(jQuery(_DOMObjectTarget).offset().top) -0;
	            var actualOffset = jQuery('html').scrollTop();
	            var documentWith = jQuery('body').width();
	            
	            //menuoffset responsive fix
	            /*if( ( parseInt(documentWith) < 749) && ( actualOffset == 0) ){
	              menuOffset = menuOffset-387;
	            }*/

	            jQuery('html, body').animate({
	                    scrollTop: menuOffset
	            }, _speed);

          }
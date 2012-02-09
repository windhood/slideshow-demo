jQuery(function($){
	
	var catSwitcher = {
		categoryList : $('#cat-list li'),
		categorySize : $('#cat-list li').length,
	  currentCategoryIndex : 0,
	  gotoCategory : function(catIndex) {
			
			this.categoryList.each(function(index) {
				//$(this).addClass("test");
			  //  alert(index + ': ' + $(this).text());
				$(this).removeClass("current-item");
				if (("cat-" + catIndex) == $(this).attr("id")) {
					$(this).addClass("current-item");
				}
			});
		},
		nextCategory : function() {
			this.currentCategoryIndex = this.currentCategoryIndex + 1;
			if (this.currentCategoryIndex >= this.categorySize) {
				this.currentCategoryIndex  = 0;
			}
			this.gotoCategory(this.currentCategoryIndex);
		},
		prevCategory : function() {
			this.currentCategoryIndex = this.currentCategoryIndex - 1;
			if (this.currentCategoryIndex < 0) {
				this.currentCategoryIndex  = this.categorySize - 1;
			}
			this.gotoCategory(this.currentCategoryIndex);
		},
		selectCategory : function() {
			//$("#cat-" + this.currentCategoryIndex + " a").click();
			//var link = $('#cat-1 a');
			//link.click();
			//$("li.current-item").find('a').click();
			window.location = $("#cat-" + this.currentCategoryIndex + " a").attr('href');
		}
		
	};
	var app = {
	    init : function( options ) { 
				this.setupSlideShow();
				this.setupKeyboardNavigation();
	      this.setupPopups();
	    },
			setupSlideShow : function() {
				$.supersized({
				  autoplay            :   1,
					// Functionality
					slide_interval      :   3000,		// Length between transitions
					transition          :   3, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	  2000,		// Speed of transition
					easing							:   "easeOutCirc",//Check  http://www.commadot.com/jquery/easing.php to see easing effect,http://matthewlein.com/ceaser/
					pause_hover         :   1,
					image_protect       :   0,	
					keyboard_nav				:   1, 
					// Components							
					slide_links				  :	  false,	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					    :  	images

				});
			},
			setupKeyboardNavigation : function() {
				$(document.documentElement).keyup(function (event) {
					//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes for key code
					// Letter m
					if (event.keyCode == 77) {
						if (!vars.stop_slideshow) {
							$('#menu-popup').jqmShow();
						}
					} else if (event.keyCode == 76) {
						// Letter l
						if (!vars.stop_slideshow) {
							$('#like-popup').jqmShow();
						} else {
							if (vars.stop_slideshow) {
								catSwitcher.selectCategory();
							}
						}
					} else if (event.keyCode == 88) {
						// Letter x
						$('#menu-popup').jqmHide();
						$('#like-popup').jqmHide();
					} else if (event.keyCode == 37) {
						// left arrow
						if (vars.stop_slideshow) {
							catSwitcher.prevCategory();
						}
					} else if (event.keyCode == 39) {
						// right arrow
						if (vars.stop_slideshow) {
							catSwitcher.nextCategory();
						}
					} //else if (event.keyCode == 13) {
						//if (vars.stop_slideshow) {
						//	catSwitcher.selectCategory();
						//}
					//}
				});
			},
			setupPopups : function() {
				$('#menu-popup').jqm({
					onShow: this.onPopupShow,
					onHide: this.onPopupHide}
					).jqmAddTrigger($('#menu-button'));

				$('#like-popup').jqm({
					onShow: this.onPopupShow,
					onHide: this.onPopupHide}
				).jqmAddTrigger($('#like-button'));
				//$('#menu-popup').data('originTop', $('#menu-popup').position().top);
				//$('#like-popup').data('originTop', $('#like-popup').position().top);
			},
			onPopupShow : function(h){ 
				vars.stop_slideshow = true;
				//alert(h.w.data('originTop'));
				var pop_top = ($(window).height() - h.w.height())/2;
				if (pop_top < 5) pop_top = 5;
				h.w.animate({top : -h.w.height()}, 0 ).show().animate(
					{ top:pop_top, avoidTransforms : false }, {duration:2000, easing:'easeOutCirc', queue:false});
				//h.w.slideDown(2000); -h.w.data('originTop')
				//if (!vars.is_paused) {
				//	api.playToggle();
				//}

			},
			onPopupHide : function(h) {
				h.w.animate({top : -h.w.height()}, {duration:2000, easing:'easeOutCirc', queue:false,complete : function() {
					h.w.hide();
					vars.stop_slideshow = false;
				}
				});
				h.o.remove();
				//if (vars.is_paused) {
				//	api.playToggle();
				//}
				
			}
	  };
	app.init();
  //end
  });
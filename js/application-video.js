jQuery(function($){
	$.supersized({
	  autoplay            :   1,
		// Functionality
		slide_interval      :   3000,		// Length between transitions
		transition          :   3, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	  800,		// Speed of transition
		easing							:   "easeOutExpo",//Check  http://www.commadot.com/jquery/easing.php to see easing effect,http://matthewlein.com/ceaser/
		pause_hover         :   1,
		image_protect       :   0,	
		keyboard_nav				:   1, 
		// Components							
		slide_links				  :	  false,	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					    :  	[			// Slideshow Images
											{image : 'img/demo/woman/zara_aug_01.jpeg', title : 'Zara aug 01', thumb : 'img/demo/woman/zara_aug_01_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_02.jpeg', title : 'Zara aug 02', thumb : 'img/demo/woman/zara_aug_02_small.jpeg'},  
                      {image : 'img/demo/woman/zara_aug_03.jpeg', title : 'Zara aug 03', thumb : 'img/demo/woman/zara_aug_03_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_04.jpeg', title : 'Zara aug 04', thumb : 'img/demo/woman/zara_aug_04_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_05.jpeg', title : 'Zara aug 05', thumb : 'img/demo/woman/zara_aug_05_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_06.jpeg', title : 'Zara aug 06', thumb : 'img/demo/woman/zara_aug_06_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_07.jpeg', title : 'Zara aug 07', thumb : 'img/demo/woman/zara_aug_07_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_08.jpeg', title : 'Zara aug 08', thumb : 'img/demo/woman/zara_aug_08_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_09.jpeg', title : 'Zara aug 09', thumb : 'img/demo/woman/zara_aug_09_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_10.jpeg', title : 'Zara aug 10', thumb : 'img/demo/woman/zara_aug_10_small.jpeg'},
                      {image : 'img/demo/woman/zara_aug_11.jpeg', title : 'Zara aug 11', thumb : 'img/demo/woman/zara_aug_11_small.jpeg'}
									]

	});
	//keyboard mapping
	$(document.documentElement).keyup(function (event) {
		//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes for key code
		// Letter m
		if (event.keyCode == 77) {
			$('#dialog').jqmShow();
		} 
		if (event.keyCode == 88) {
			$('#dialog').jqmHide();
		}
	});
	
	$('#dialog').jqm();
  //end
  });
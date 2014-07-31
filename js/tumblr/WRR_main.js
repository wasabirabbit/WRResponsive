
/*
Description: Tumblr Theme
Author: Gunther Koo
*/	

var $ = jQuery.noConflict();
$(document).ready(function(){
							

///// TopNav
$('.Top_nav > div > ul > li').removeClass('selected').removeClass('selected'); // add to prevent sub nav reveal on load
$('#TopNav > div > ul > li ').mouseover(function(){
$(this).siblings().removeClass('selected');
$(this).addClass('selected');
 $(this).mouseleave(function(){
 $(this).removeClass('selected');
 });
});

///// List stripe
$('ul.stripes.odd li:odd').addClass('stripe');
$('ul.stripes.even li:even').addClass('stripe');
$('table.stripes.odd tr:odd').addClass('stripe');
$('table.stripes.even tr:even').addClass('stripe');

///// IE6 
if(typeof ie6!=undefined){
//// Trans bg
$('.trans').each(function(){$(this).height($(this).parent().outerHeight());});
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Customizable Plugins for Use - START //

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


$('span.menuBtn').click(
	function(){
		$('section.Wrap').toggleClass('slide');
		$('section.menuRight').toggleClass('slide');
});


// Page Load Delay Animation
$('.delay-ani').addClass('delayed');

// Waypoint Plugin 
// $('.Wrap').waypoint(function(direction) {
// 	$('.fadeIn').toggleClass('waypoint-fade');
// }, {
// 		offset: function() {
// 			return $.waypoints('viewportHeight') - $(this).height() + 150;
// 		}
// });


$('.photoset-grid-lightbox').photosetGrid({
  highresLinks: true,
  rel: 'withhearts-gallery',
  gutter: '2px',

  onComplete: function(){
    $('.photoset-grid-lightbox').attr('style', '');
    $('.photoset-grid-lightbox a').colorbox({
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%'
    });
  }
});


// FadeIn Waypoint

// $('.fadeIn').waypoint({
//     handler: function (direction) {
//         if (direction == 'down') {
//             $(this).addClass('waypoint-fade');
//         }
//         // Comment Out To Keep FadeIn Visible
//         if (direction == 'up') {
//             $(this).removeClass('waypoint-fade');
//         }
//     },
//     offset: '85%'
// });

// Add Class on Waypoint JS onScroll to area

// var $head = $( '#waypoint-add' );
// $( '.waypoint-add' ).each( function(i) {
// 	var $el = $( this ),
// 		animClassDown = $el.data( 'animateDown' ),
// 		animClassUp = $el.data( 'animateUp' );

// 	$el.waypoint( function( direction ) {
// 		if( direction === 'down' && animClassDown ) {
// 			$head.attr('class', 'waypoint-add ' + animClassDown);
// 		}
// 		else if( direction === 'up' && animClassUp ){
// 			$head.attr('class', 'waypoint-add ' + animClassUp);
// 		}
// 	}, { offset: '100%' } );
// });

// Parallax Plugin //
// if ( $(window).width() > 768) {
// 	$('#Parallax').parallax("50%", 0.3);
// 	$('#Second').parallax("50%", 0.5);
// }

//// Sticky Nav Plugin //
// $("#sticky-nav").sticky({ topSpacing: 0 });

///// FlexSlider //
// $('.flexslider').flexslider();

// $('.main-homepage-slider').flexslider({
// 	directionNav: false, 
//     animation: "slide"
//  });

////// Instagram Plugin //
// $.fn.spectragram.accessData = {
//     accessToken: '673878919.011d11b.cdb72e88aa7d43f899616a85834e2717',
//     clientID: '011d11bebe184a298a9e18feb468b219'
// };

// $('ul.instafeed').spectragram('getRecentTagged',{
//     query: 'elidraws',
//     max: 4
// });


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Customizable Plugins for Use - START //

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

	
///// Window Width Responsive

	// var $window = $(window);



 //    function checkWidth() {
 //        var windowsize = $window.width();
 //        if (windowsize > 767) {
 //        	$('.row.image-left').each(function (){
 //            	$('.firstColumn').remove().insertBefore('.secondColumn');
 //            });
 //        }
 //        if (windowsize < 767) {
 //        	$('.row.image-left').each(function (){
 //            	$('.secondColumn').remove().insertBefore('.firstColumn');
 //            });
	// 	}
 //    }
 //    // Execute on load
 //    	checkWidth();
 //    // Bind event listener
 //    	$(window).resize(checkWidth);



/// ScrollTo any hashtag Function //
$('a[href^="#"]').bind('click.link', function(e) {
    e.preventDefault();
        
    // Get the current target hash
    var target = this.hash;
        
    // Animate the scroll bar action so its smooth instead of a hard jump
    $('html, body').stop().animate({
        'scrollTop' : $(target).offset().top - 0
    }, 2000, 'easeInOutExpo');
});

///// End jQuery Ready
}); 
///// End jQuery Ready

// FFG Homepage Carousel Slider 

// function scrollToPosition(element) {
//     if (element !== undefined) {
//         $(".carousel-slider").scrollTo(element, 500, {
//             margin: true
//         });
//     }
// }

// $(function() {

//     //Create an Array of posts
//     var posts = $('.post');
//     var position = 0; //Start Position
//     var next = $('#next');
//     var prev = $('#prev').hide();

//     //Better performance to use Id selectors than class selectors
//     next.click(function(evt) {
//         //Scroll to next position
//         prev.show();
//         scrollToPosition(posts[position += 1]);
//         if (position === posts.length - 1) {
//             next.hide();
//         }
//     });

//     prev.click(function(evt) {
//         //Scroll to prev position    
//         next.show();
//         scrollToPosition(posts[position -= 1]);
//         if (position === 0) {
//             prev.hide();
//         }
//     });

// });

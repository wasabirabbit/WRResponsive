
/*
Description: __TemplateName
Developer: __DeveloperName
Start Date: __StartDate
*/	

var $ = jQuery.noConflict();
$(document).ready(function(){
							
/////* Global variables */////
Loc=document.location.href;
breadcrumb=$('#catalog_crumb');
Dir0 = Loc.split('/')[3];
Dir1 = Loc.split('/')[4];
Dir2 = Loc.split('/')[5];
Dir3 = Loc.split('/')[6];
Uns1 = Loc.split('_')[1];
section="";

/////* Templates */////
//Subjective scripts based on Loc
if(Dir1!="index.htm" && Dir1!=""){ // all but the portal
}
if(Uns1!="catalog" && Dir1!="");
if(Dir0.substring(0,17)=="CatalogueRetrieve" || Uns1=="product" || Uns1=="catalog" || Dir0.substring(0,15)=="OrderRetrievev2" || Dir0.substring(0,13)=="OrderRetrieve" || Dir0.substring(0,12)=="Default.aspx" || Dir0.substring(0,13)=="MemberProcess") {
$('.Wrap').addClass('catalog');
}

// Product small and large
// This function adds classes to the .Wrap div subject to which eCommerce subPage you're in
if($('.productSmall').height()!=null) $('.Wrap').addClass('prod-small');
if($('.productLarge').height()!=null) $('.Wrap').addClass('prod-large');
else if(Dir1==""){
section="home";
}
else if(Dir1=="Products" && Dir2==""){
section="Products";
}
else if(Dir1=="About" && Dir2==""){
section="About";
}
else if(Dir1=="Events" || Dir0.substring(0,20)=="AnnouncementRetrieve"){
section="Events";
}
else{ 
section="default";
}

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


//MainNav Active States

// $(".Main_nav ul li").on({
//     mouseover: function() {
//     	if ( $(this).children('ul').length > 0 ) {
// 	        $(".Main_nav").addClass("active-hover")
// 		}
//     },
//     mouseout: function() {
//         $(".Main_nav").removeClass("active-hover")
//     }
// });



// Init Textillate
$(function(){
	$('.tlt').textillate();
});




// Responsive Menu
$('.menu-toggle').click(function () {
    $('section.menu-slideout').toggleClass('show');
});

$('nav.slideout li a').click(function () {
    $('section.menu-slideout').removeClass('show');
});


// Instagram Embed
 var feed = new Instafeed({
        get: 'user',
        userId: 418313457,
        accessToken: '418313457.467ede5.2657d1b3985f4fa7b3dd2fb8d5eb5e9e',
        template: '<a target="_blank" href="{{link}}" class="sml-2 med-4 bloks bg-brown bord-ltbrown" style="background-image: url(https:{{image}}); background-repeat: no-repeat; background-size: cover;"><i class="icon-instagram larger text-ltbrown"></i></a>',
        sortBy: 'most-recent',
        limit: 1,
        resolution: 'standard_resolution'
    });
    feed.run();


// Tumblr Embed

$.ajax({
    url: "http://api.tumblr.com/v2/blog/wasabirabbit.tumblr.com/posts/text?api_key=Srhk9qkcJO69pAoB4ltM5uIqpwUBO7kgDqDEaCD9Jo8EafWyHE",
    dataType: 'jsonp',
    success: function(data){
        posts = data.response.posts
		
		// Set Vars for URL, Title, & Body
		var firstPostTitle = posts[0].title;
		var firstPostUrl = posts[0].post_url;
		var firstPostBody = posts[0].body;
		
		// Push the Values to the Page
		$('#tumblrEmbed .title').text(firstPostTitle);
		$('#tumblrEmbed > a').attr('href',firstPostUrl);
		$('#tumblrEmbed .body').html(firstPostBody);

		// Clean Up the Rendered HTML
 		var bodyRefine = $("#tumblrEmbed .body").text().substr(0,120)+'...';
 		console.log(bodyRefine);

        $("#tumblrEmbed .body").text(bodyRefine);

    }
});








// $('.flexslider').flexslider();


// A Menu Slide Function?
// $('span.menuBtn').click(
// 	function(){
// 		$('section.Wrap').toggleClass('slide');
// 		$('section.menuRight').toggleClass('slide');
// });


// Page Load Delay Animation
// $('.delay-ani').addClass('delayed');

// Waypoint Plugin 
// $('.Wrap').waypoint(function(direction) {
// 	$('.fadeIn').toggleClass('waypoint-fade');
// }, {
// 		offset: function() {
// 			return $.waypoints('viewportHeight') - $(this).height() + 150;
// 		}
// });

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

/*	--------------------------------------------------
	:: Init Scripts
	
	General plugin init scripts & custom scripts written
	just for this site. Put 'em here, yo. 
	
	-------------------------------------------------- */

	
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

///// Fancy Box 
// $('a.ltbx').fancybox({'transitionIn':'elastic','transitionOut':'elastic','speedIn':600,'speedOut':200,'overlayShow':true});
// $('a.ltbx a').fancybox({'transitionIn':'elastic','transitionOut':'elastic','speedIn':600,'speedOut':200,'overlayShow':true});
// $('a.ltbx.win').fancybox({'width':600,'height':600,'autoDimensions':false});
// $("a.ltbx.if").fancybox({ 'width': 960, 'height': 540, 'autoScale' : false, 'transitionIn' : 'none', 'transitionOut' : 'none', 'type' : 'iframe' });

/*	--------------------------------------------------
	:: Navigation Scripts
	
	These are scripts designed to make in-page navigation
	freaking magical. 
	/ / Includes: / / 
	Ã¢â‚¬Â¢Ã‚ SUPERnav
	Ã¢â‚¬Â¢ SZ Nav
	Ã¢â‚¬Â¢ TopNav selected class fixes
	
	-------------------------------------------------- */


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


///// SUPER Nav (.s-nav)
$('.s-nav a').each(function(){;
var SubA=$(this);
var SubL=this.href;
	if (SubL==Loc /* || (SubL.split('/')[3]==Loc.split('/')[3] && SubL.split('/')[4]=="") */ || SubA.html()==breadcrumb.html() || ($('#Account')!=null && (SubL.split('/')[3]=="Account" && SubL.split('/')[4]=="") || (Loc.split('/')[3].substring(0,12)=="CaseRetrieve" && SubL.split('/')[4]=="Case_History.htm") || (Loc.split('/')[3].substring(0,19) == "OrderSecureRetrieve" && SubL.split('/')[4] == "Order_History.htm")) || (SubL.split('/')[3]=="Store" && (Loc.split('_')[1]=="catalog" || Loc.split('_')[1]=="product" || Loc.split('/')[3].substring(0,13)=="OrderRetrieve" || Loc.split('/')[3].substring(0,17)=="CatalogueRetrieve")) || (SubL.split('/')[4]== "FAQs.htm" && (Loc.split('/')[3].substring(0,11)=="FAQRetrieve" || Loc.split('/')[3].substring(15,18)=="FAQ"))) {
	$(this).attr('class', 'active');
	$(this).parents('li').attr('class', 'selected')
	}
});

///// SZ Login Content Visibility
if(loggedin==1){
$('.loggedIn').css('display', 'block'); 
}
else {
$('.loggedOut').css('display', 'block');
}

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

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//// Google map
var map = null;	
var geocoder = null;	
function initialize() {	
	if (GBrowserIsCompatible()) {	
	map = new GMap2(document.getElementById("map_canvas"));	
	map.setCenter(new GLatLng(-30.4693, 150.0179), 13);	
	map.addControl(new GLargeMapControl());	
	map.addControl(new GMapTypeControl());	
	geocoder = new GClientGeocoder();	
	}}	
	function showAddress(address,title) {	
	if (geocoder) {	
	geocoder.getLatLng(	
	address,	
	function(point) {	
	if (!point) {	
	alert(address + " not found");	
	} else {	
	map.setCenter(point, 13);	
	var marker = new GMarker(point);	
	map.addOverlay(marker);	
	marker.openInfoWindowHtml(title+"<br />"+address);	
	}});}}

//// Google map - custom address targetting
if($('#gMap_addr').html()!=null){
var gMap_address=$("#gMap_addr").html();
var gMap_title=$("#gMap_title").html();
initialize();
showAddress(gMap_address,gMap_title);
$('#map_canvas').parent().hide();
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
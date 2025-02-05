jQuery(function(){
	offset_header();
	// addClass_dropdown();
});
jQuery(document).ready(function(){
	offset_header();
	// addClass_dropdown();
});
jQuery(window).resize(function(){
	offset_header();
	// addClass_dropdown();
});

/*----------------------------------------------------------*/
/*	Top slide control
/*----------------------------------------------------------*/
// add active class to first item
jQuery('#top__fullcarousel .carousel-indicators li:first-child').addClass("active");
jQuery('#top__fullcarousel .item:first-child').addClass("active");
jQuery('.carousel').carousel({
  interval: 4000
});

/*----------------------------------------------------------*/
/*	Offset header for admin bar
/*----------------------------------------------------------*/
function offset_header(){
	var headerHeight = jQuery('header.siteHeader').height();
	jQuery('body').css("padding-top",headerHeight+"px");
	if ( jQuery('body').hasClass('admin-bar') ){
		// Get adminbar height
		var adminBarHeight = jQuery('#wpadminbar').height();
		// Math hight of siteHeader + adminbar
		// var allHead_height = adminBarHeight + headerHeight;
		// Add padding
		jQuery('.admin-bar .navbar-fixed-top').css("top",adminBarHeight+"px");
		
	}
}

/*-------------------------------------------*/
/*	Header height changer
/*-------------------------------------------*/
jQuery(document).ready(function(){
	jQuery(window).scroll(function () {
		var bodyWidth = jQuery(window).width();
		if ( bodyWidth >= 768 ) {
	    	var scroll = jQuery(this).scrollTop();
	        if (jQuery(this).scrollTop() > 10) {
	            head_low();
	        } else {
				head_high();
	        }
	    } else {
	    	head_low();
	    }
	});
});
function head_low(){
	jQuery('.siteHeader .container').stop().animate({
		"padding-top":"6px",
		"padding-bottom":"5px",
	},100);
	jQuery('.navbar-brand img').stop().animate({
		"max-height":"45px",
	},100);
}
function head_high(){
	jQuery('.siteHeader .container').stop().animate({
		"padding-top":"22px",
		"padding-bottom":"20px",
	},100);
	jQuery('.navbar-brand img').stop().animate({
		"max-height":"50px",
	},100);
}

/*-------------------------------------------*/
/*	YOUTUBEのレスポンシブ対応
/*-------------------------------------------*/
jQuery('iframe').each(function(i){
	var iframeUrl = jQuery(this).attr("src");
	if(!iframeUrl){return;}
	// iframeのURLの中に youtube が存在する位置を検索する
	idx = iframeUrl.indexOf("youtube");
	// 見つからなかった場合には -1 が返される
	if(idx != -1) {
	    // youtube が含まれていたらそのクラスを返す
	    jQuery(this).addClass('iframeYoutube').css({"max-width":"100%"});
	    var iframeWidth = jQuery(this).attr("width");
	    var iframeHeight = jQuery(this).attr("height");
	    var iframeRate = iframeHeight / iframeWidth;
	    var nowIframeWidth = jQuery(this).width();
	    var newIframeHeight = nowIframeWidth * iframeRate;
	    jQuery(this).css({"max-width":"100%","height":newIframeHeight});
	}
});
/*----------------------------------------------------------*/
/*	add bootstrap class
/*----------------------------------------------------------*/
jQuery(document).ready(function(){
	jQuery('textarea').addClass("form-control");
	jQuery('select').addClass("form-control");
	jQuery('input[type=text]').addClass("form-control");
	jQuery('input[type=email]').addClass("form-control");
	jQuery('input[type=tel]').addClass("form-control");
	jQuery('input[type=submit]').addClass("btn btn-primary");
	jQuery('#respond p').each(function(i){
		jQuery(this).children('input').appendTo(jQuery(this));
		});
	jQuery('form#searchform').addClass('form-inline');
	jQuery('form#searchform input[type=text]').addClass('form-group');
});
// jQuery('#respond p label').prependTo()

// function addClass_dropdown(){
// 	jQuery('.navbar-collapse ul.sub-menu').parent().addClass('dropdown');
// 	jQuery('.navbar-collapse ul.sub-menu').parent().append('<i class="fa fa-home dropdown-toggle" data-doggle="dropdown"></i>');
// 	jQuery('.navbar-collapse ul.sub-menu').addClass('dropdown-menu');
// }
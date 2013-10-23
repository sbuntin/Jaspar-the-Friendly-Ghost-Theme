/**
 * Main JS file for Jaspar behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // set background image of post header
        var $postImage = $('#header-img');
        if ( $postImage.length ) {
	        var postImageURL = $postImage.attr('src');
	        $('header#site-head').css('background-image','url(' + postImageURL + ')');
        }
        $postImage.remove();

    });

}(jQuery));
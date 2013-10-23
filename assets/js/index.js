/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // set background image of post header
        var $postImage = $('#header-img');
        if ( $postImage ) {
	        var postImageURL = $postImage.attr('src');
	        $('#site-head').css('background-image',postImageURL);
        }
        $postImage.remove();

    });

}(jQuery));
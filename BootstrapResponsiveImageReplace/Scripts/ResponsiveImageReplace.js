/*!
 * ResponsiveImageRepace JavaScript Library v1.0.0
 * http://arranmaclean.wordpress.com/
 *
 * Needs Bootstrap 3
 * http://getbootstrap.com/
 *
 * Copyright 2013, 2014 A R Media Ltd
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-08-08T21:08Z
 */
(function ($) {
    "use strict";

    $.fn.ResponsiveImageReplace = function () {

        var envs = ["xs", "sm", "md", "lg"],
         doc = window.document,
         getMediaQueryState = function () {
             var temp = doc.createElement("div");
             doc.body.appendChild(temp);

             for (var i = envs.length - 1; i >= 0; i--) {
                 var env = envs[i];
                 temp.className = "hidden-" + env;
                 if (temp.offsetParent === null) {
                     doc.body.removeChild(temp);
                     return env;
                 }
             }
             return "";
         },
         getImage = function (thisObj, src, wd) {
             thisObj.prop("alt", src);
             thisObj.prop("src", src);
             thisObj.prop("width", wd);
         },
         getImageParams = function (thisObj, mediaQuery) {
             switch (mediaQuery) {
                 case 'xs':
                     getImage(thisObj, thisObj.data('xs-scr'), thisObj.data('xs-width'));
                     break;
                 case 'sm':
                     getImage(thisObj, thisObj.data('sm-scr'), thisObj.data('sm-width'));
                     break;
                 case 'md':
                     getImage(thisObj, thisObj.data('md-scr'), thisObj.data('md-width'));
                     break;
                 default:
                     getImage(thisObj, thisObj.data('lg-scr'), thisObj.data('lg-width'));
             }
         };

        for (var t = 0, len = $(this).length; t < len; t++) {

            var $thisObj = $(this[t]),
                mediaQueryState = getMediaQueryState();

            getImageParams($thisObj, mediaQueryState);

            $(window).resize(function () {
                if (mediaQueryState !== getMediaQueryState()) {
                    mediaQueryState = getMediaQueryState();
                    getImageParams($thisObj, mediaQueryState);
                }
            });
        }
    };
})(jQuery);
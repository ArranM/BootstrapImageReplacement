/*!
 * Bootstrap ImageRepace JavaScript Library v1.0.2
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

    $.fn.ImageReplace = function () {

        var envs = ["xs", "sm", "md", "lg"],
            doc = window.document,
            mediaQueryState,
            getMediaQueryState = function () {
                var dv = doc.createElement("div");
                doc.body.appendChild(dv);

                for (var i = envs.length - 1; i >= 0; i--) {
                    var env = envs[i];
                    dv.className = "hidden-" + env;
                    if (dv.offsetParent === null) {
                        doc.body.removeChild(dv);
                        return env;
                    }
                }
                return "";
            },
            getImage = function (thisObj, src, wd, hi) {

                var newImg = new Image();

                thisObj.prop("src", src);
                if (wd !== "" && hi !== "") {
                    thisObj.prop("width", wd);
                    thisObj.prop("height", hi);
                } else {
                    newImg.onload = function () {
                        thisObj.prop("width", newImg.width);
                        thisObj.prop("height", newImg.height);
                    }
                    newImg.src = src;
                }
            };

        var that = $(this);

        $(window).on("load resize", function () {
            var mediaQueryLive = getMediaQueryState();
            if (mediaQueryState !== mediaQueryLive) {
                mediaQueryState = mediaQueryLive;
                for (var t = 0, len = $(that).length; t < len; t++) {
                    getImage($(that[t]), $(that[t]).data(mediaQueryState + '-src'), $(that[t]).data(mediaQueryState + '-width'), $(that[t]).data(mediaQueryState + '-height'));
                }
            }
        });
    };
})(jQuery);
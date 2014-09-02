BootstrapImageReplacment
========================

Quickly download different size images depending on current media query view. 

Example usage in youe javascript file: 

$(function() { 
    $("[data-action=\"bir\"] img").ImageReplace(); 
});


Example usage in your html file:
<div class="row">
        <div class="col-md-6" data-action="bir">
            <p>Width and height set</p>
            <img data-xs-src="http://placehold.it/50&text=Extra Small" data-xs-width="50" data-xs-height="50"
                 data-sm-src="http://placehold.it/100&text=Small" data-sm-width="100" data-sm-height="100"
                 data-md-src="http://placehold.it/300&text=Medium" data-md-width="300" data-ms-height="300"
                 data-lg-src="http://placehold.it/500&text=Large" data-lg-width="500" data-lg-height="500"
                 src="" alt="demo image1">
        </div>
        <div class="col-md-6" data-action="bir">
            <p>No width or height set on Large so it will just default to natural size</p>
            <img data-xs-src="http://ads.weloveanycar.com/imagead/215040/800/front" data-xs-width="" data-xs-height=""
                 data-sm-src="http://placehold.it/100&text=Small" data-sm-width="" data-sm-height=""
                 data-md-src="http://placehold.it/300&text=Medium" data-md-width="" data-md-height=""
                 data-lg-src="http://placehold.it/500&text=Large" data-lg-width="" data-lg-height=""
                 src="" alt="demo image2" class="img-responsive" />
        </div>
    </div>

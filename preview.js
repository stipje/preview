var previewImage = function (options) {

    // dingen die ingesteld kunnen worden
        var element = $(document);
        var namespace = '.previewImage';
        var opts = $.extend({

        'eventSelector': '[data-preview-image]', 
        'dataKey': 'previewImage', // the key to the link data, should match the above value.
        }, options);
        
        // unbind any previous event listeners:
        element.off(namespace);
            
        element.on('mouseover' + namespace, opts.eventSelector, function(e) {
            $("#plaatje").attr("src",$(this).data(opts.dataKey));
        });
        
        return this;

    return {
        init: init,
    };
    
};

$.previewImage();
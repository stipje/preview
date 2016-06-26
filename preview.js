var previewImage = function (options) {

    // elementen die ingesteld kunnen worden
        var actie = 'mouseover';
        var element = $(document);
        var namespace = '.previewImage';
        var opts = $.extend({

        'eventSelector': '[data-preview-image]', 
        'dataKey': 'previewImage', // de link naar de data, deze moet matchen bij de bovenstaande regel.
        }, options);
        
        // ontbindt vorige event listeners:
        element.off(namespace);
            
        element.on(actie + namespace, opts.eventSelector, function(e) {
            $("#plaatje").attr("src",$(this).data(opts.dataKey));
        });
        
        return this;

    
};



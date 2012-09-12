(function($){
    $.fn.extend({ 
        //plugin name - attrimate
        attrimate: function(attributeName, attributeValue, callback) {
         
            return this.each(function() {
                var me = $(this);              
                
                me.attr(attributeName, attributeValue);
                 
            });
        }
    });
})(jQuery);
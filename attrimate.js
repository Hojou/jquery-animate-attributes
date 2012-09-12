(function($){
    $.fn.extend({ 
        //plugin name - attrimate
        attrimate: function(attributes, callback) {

            var me = this;

            var animate = function(el, attributeName, attributeValue) {
                el.attr(attributeName, attributeValue);
            };
         
            return this.each(function() {
                var item = $(this);              
                
                for (var i in attributes) {
                    me.animate(item, i, attributes[i])
                }
                
                 
            });
        }
    });
})(jQuery);
(function($){
    $.fn.extend({ 
        //plugin name - attrimate
        attrimate: function(attributes, callback) {

            var me = this;

            var anim = function(el, attributeName, attributeValue) {
                el.attr(r, 1);
            };

         
            return this.each(function() {
                var item = $(this);              

/*                
                for (var i in attributes) {
                    //alert(i + '\n' + attributes[i] + '\n' + item);
                    console.log(i);
                    //me.animate(item, i, attributes[i])
                }
*/                
                 
            });
        }
    });
})(jQuery);
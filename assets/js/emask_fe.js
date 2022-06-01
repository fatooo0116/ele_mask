



(function($){
    $(document).ready(function(){
        // console.log("....2");


        setTimeout(function(){
            if($("body").hasClass('elementor-editor-active')){
                $(".elementor-add-new-section .elementor-add-template-button").remove();
            };
        },3000);


        setTimeout(function(){
            if($("body").hasClass('elementor-editor-active')){
                $(".elementor-add-new-section .elementor-add-template-button").remove();
            };
        },4000);


        setTimeout(function(){
            if($("body").hasClass('elementor-editor-active')){
                $(".elementor-add-new-section .elementor-add-template-button").remove();
            };
        },5000);

        /*
         check_editor = function(){
            console.log("pppp");
        };
         

         setTimeout(function(){
            if($("body").hasClass('elementor-editor-active')){
                console.log('edit model');
    

                $("body").on("mousedown, mouseup, click", function(){
                    // alert("Click detected inside iframe.");

                    console.log("event");
                    check_editor();

                });
                var resizeTimer;
                $("#site-content").bind("DOMSubtreeModified", function() {
                   
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function() {
                  
                      // Run code here, resizing has "stopped"
                      console.log("event dom change");
                              
                    }, 350);
                });

            }
         },4000);
         */
    });
})(jQuery);
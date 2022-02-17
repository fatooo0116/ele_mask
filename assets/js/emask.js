(function($){
    $(document).ready(function(){
       

        let obj = {};

        $("#save_setting").on("click",function(){
            
            let box = $("#elementor-panel-categories > .elementor-panel-category");
            box.each(function(it){
                console.log(box[it]);

                let id = $(box[it]).attr("id");
                obj[id] = {}

            });


            console.log(obj);

        });            
    });




    

    get_controller = function(method){
        var text_num =0;
        var check_exist = null;
        check_exist  = setInterval(function(){
           text_num =  $("#elementor-panel-categories  .elementor-element-wrapper > .elementor-element > .elementor-element-title-wrapper  > .title");
           if(text_num.length>0){
               clearInterval(check_exist );
               method();
           }
           
        },500);
    }


    

    get_controller(function(){
        let text_numx =  $("#elementor-panel-categories .elementor-element-wrapper > .elementor-element > .elementor-element-title-wrapper  > .title");
        console.log(text_numx);

        text_numx.each(function(it){
            console.log(text_numx[it]);
            if($(text_numx[it]).text() =='標題'){
                $(text_numx[it]).text('jsakldjaksdj');
                console.log("change");
            }
        })
    });

})(jQuery);




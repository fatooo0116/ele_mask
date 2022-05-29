(function($){
    $(document).ready(function(){
       //  console.log('wp admin begin2 .....');


        $("#save_setting").on('click',function(){
            console.log("...");


            let data_obj=[];
            $("#ft_mask .box").each(function(){
                let input = $(this).find('input');
                let keyname = input.attr('keyn');
                let vax = input.val();

                data_obj.push({
                    k:keyname,
                    v:vax
                });
            });

            
    
            console.log(data_obj);
        });





    });
})(jQuery);



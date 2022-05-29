


let panel_setting = [
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-group:nth-child(1)",
        show:0,
        name:'設定'
    },
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-group:nth-child(2)",
        show:1,
        name:'NAVIGATE FROM PAGE'
    }
];



let panel_main = [];

/**    panel_setting  */
(function($){
    $(document).ready(function(){
        console.log("setting...");




        let init = function(callbk){

           //  let data = null;
            $.post( "/wp-json/my_api/get_setting", function( data ) {
                // $( ".result" ).html( data );
                data = JSON.parse(data);
                console.log(data);

                return callbk(data);
              });            
        }


        let js_to_css = function(){
            panel_setting.forEach((it) =>{
                console.log(it);
                if(it.show!='1'){
                    $(it.k).css('display','none');
                }else{
                    $(it.k).css('display','block');
                }
                
            });
        }





        /**   Load data */
        init(function(data){
            panel_setting =  data;
        });





        $(document).on("click","#elementor-panel-header-menu-button",function(){
            console.log(panel_setting);


            if($("#elementor-panel-page-menu").length>0){  /**  進入設定頁面  */
               
           


                    // render form
                    let html = "<h3>設定</h3>";
                    panel_setting.forEach(function(im){
                        let checked = "";
                            if(im.show=='0'){ checked= "checked";}
                            html += '<label class="box chk"><input type="checkbox"  name="aloha1" jqk="'+im.k+'"  '+checked+'  /><div class="title">關閉 '+im.name+' </div></label>';
                    });

                    html +='<div class="action"> <button type="button" id="setting_save" >Save</button> </div>';

                    $("#ft_mask .inner").html(html);


                    setTimeout(function(){
                        $("#ft_mask .inner .box.chk input").on('change',function(){
                            console.log('change');
                            let show = $(this).prop('checked');
                            let jqk = $(this).attr('jqk');
                            console.log(jqk);
                            console.log(show);

                            panel_setting.filter(function(it){
                                if(it.k==jqk){
                                    it.show = (show)? "0":"1" 
                                }
                            });

                            console.log(panel_setting);
                        });
                    },10);
            



                    $("#setting_save").on('click',function(){
                        // alert('save');

                        js_to_css();


                        /**  js control css first */
                        $.post( "/wp-json/my_api/update_setting",{ data:panel_setting } , function( data ) {
                        // $( ".result" ).html( data );
                        //   data = JSON.parse(data);
                        //  console.log(data);
                        //  return callbk(data);
                        });  

                    });



            }else{ 

            }   
           
        });
    });
})(jQuery)







































let  check_editor = null;

(function($){
    $(document).ready(function(){


        let main_setting = [];
       
        // console.log("iint");


        setTimeout(function(){
           

            check_editor = function(){
                // console.log("全域"); 

                get_controller(function(){
                    /*
                    let text_numx =  $("#elementor-panel-categories .elementor-element-wrapper > .elementor-element > .elementor-element-title-wrapper  > .title");
                                            
                    text_numx.each(function(it){
                        console.log(text_numx[it]);                      
                        if($(text_numx[it]).text() =='標題'){}                        
                    });

                    $("#elementor-panel").removeClass('hide');
                    */
                    main_setting=[];

                    let all_out_box = $("#elementor-panel-categories > div");
                    $(all_out_box).each(function(){
                        let title = $(this).find('.elementor-panel-category-title');
                        console.log(title.text());
                        main_setting.push({
                            name:title.text(),
                            k:"#"+$(this).attr('id')
                        });
                    });


                    console.log(main_setting);

                    /**  render to form */
                    let html = "<h3>主選單</h3>";
                    main_setting.forEach(function(im){
                        let checked = "";
                            if(im.show=='0'){ checked= "checked";}
                            html += '<label class="box chk"><input type="checkbox"  name="aloha1" jqk="'+im.k+'"  '+checked+'  /><div class="title">關閉 '+im.name+' </div></label>';
                    });

                    html +='<div class="action"> <button type="button" id="main_setting_save" >Save</button> </div>';

                    $("#ft_mask .inner").html(html);


                });
            }


            init = function(){
                    check_editor();
            }
           
            init();

            

            $(document).on('click','#elementor-panel-header-add-button',function(){
                console.log("主選單");  
                check_editor();              
            });


            $(document).on('click','.elementor-panel-navigation-tab[data-tab=global]',function(){
                console.log("全域");                
            });




            $(document).on('click','.elementor-panel-navigation-tab[data-tab=categories]',function(){
                console.log("元素");

                get_controller(function(){
                    let text_numx =  $("#elementor-panel-categories .elementor-element-wrapper > .elementor-element > .elementor-element-title-wrapper  > .title");
                                              
                    text_numx.each(function(it){
                        console.log(text_numx[it]);                      
                        if($(text_numx[it]).text() =='標題'){}                        
                    });

                    $("#elementor-panel").removeClass('hide');
                });
            });








            /*
                $(document).on('click','#elementor-panel-footer-settings',function(){
                    console.log("設定");
                });

            
                $(document).on('click','#elementor-panel-footer-navigator',function(){
                    console.log("導覽器");
                });

                $(document).on('click','#elementor-panel-footer-history',function(){
                    console.log("修訂記錄");
                });

                $(document).on('click','#elementor-panel-footer-responsive',function(){
                    console.log("響應模式");
                });
            */

            /*
            $(document).on('mousedown','#elementor-panel-categories',function(){
                console.log('xx drag down...');
            });

            $(document).on('mousemove','#elementor-panel-categories',function(){
                console.log('xx drag  move...');
            });
            */
            

            /*
            $(document).on('mouseup','body',function(){
                console.log('main editor... up');
            });
            
            $(document).on('click','body',function(){
                console.log('main editor... click');
            });
            */
            

            /**  iframe click */
            /*
            $("#elementor-preview-iframe").on('click',function(){
                console.log('iframe... click');
            });
            */
            $(document).on('load','#elementor-preview-iframe',function(){
                console.log('load... iframe');
            })



            $("iframe").on("load", function(){
                console.log("load iframe");
    
                $(this).contents().on("mousedown, mouseup, click", function(){
                    alert("Click detected inside iframe.");
                });
            });           


        },5000);











        let obj = {};

        $("#save_setting").on("click",function(){
            
            let box = $("#elementor-panel-categories > .elementor-panel-category");
            box.each(function(it){
             //   console.log(box[it]);

                let id = $(box[it]).attr("id");
                obj[id] = {}

            });


           // console.log(obj);

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
       // console.log(text_numx);

        text_numx.each(function(it){
          //  console.log(text_numx[it]);
          
            if($(text_numx[it]).text() =='標題'){
                $(text_numx[it]).text('jsakldjaksdj');
                console.log("change3");
            }
            
        })
    });







})(jQuery);




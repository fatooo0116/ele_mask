


let panel_setting = [
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-group:nth-child(1)",
        hide:0,
        name:'設定',
        t:'t1'
    },

    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-item-global-settings",
        hide:0,
        name:'網站設定',
        t:'t11'
    },
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-item-site-editor",
        hide:0,
        name:'主題建構器',
        t:'t11'
    },
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-item-editor-preferences",
        hide:0,
        name:'使用者偏好設定',
        t:'t11'
    },

    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-group:nth-child(2)",
        hide:0,
        name:'Navigate From Page',
        t:'t2'
    },

    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-item-finder",
        hide:0,
        name:'查找器',
        t:'t22'
    },
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-item-view-page",
        hide:0,
        name:'View Page',
        t:'t22'
    },
    {
        k:"#elementor-panel-page-menu-content .elementor-panel-menu-item-exit-to-dashboard",
        hide:0,
        name:'Exit To Dashboard',
        t:'t22'
    }
];



let panel_main = [];

/**    panel_setting  */
(function($){
    $(document).ready(function(){
        console.log("setting...v3");



        let ajax_panel_setting = null;
        let init = function(){

           //  let data = null;
            $.post( "/wp-json/my_api/get_setting", function( data ) {
                // $( ".result" ).html( data );
                ajax_panel_setting = JSON.parse(data);
               // console.log(data);

               // return callbk(data);
              });            
        }

        init();


        let js_to_css = function(){
            panel_setting.forEach((it) =>{
                console.log(it);

                if(it.t=='t1' || it.t=='t2'){
                    if(it.hide=='1'){
                        $(it.k).css('display','none');
                    }else{
                        $(it.k).css('display','block');
                    }
                }else{
                    if(it.hide=='1'){
                        $(it.k).css('display','none');
                    }else{
                        $(it.k).css('display','table');
                    }
                }

                
            });
        }





        





        $(document).on("click","#elementor-panel-header-menu-button",function(){
            console.log(panel_setting);


            if($("#elementor-panel-page-menu").length>0){  /**  進入設定頁面  */
               

                    /**   Panel setting...   */
                    if(ajax_panel_setting){
                        panel_setting.forEach(function(im){
                            let save_val = ajax_panel_setting.filter(function(obj) { return obj.k==im.k; });
                            if(save_val.length>0){
                                // it.hide = save_val[0].hide;
                                console.log(save_val);
                                if(save_val[0].hide=='1'){ 
                                    im.hide = '1';
                                }
                            }
                        });
                    }



                    // render form
                    let html = "<h3>設定</h3>";
                    panel_setting.forEach(function(im){
                        let checked = "";
                        let order = '';
                           

                            if(im.hide=='1'){ checked= "checked";}
                            html += '<label class="box chk '+im.t+'"><input type="checkbox"  name="aloha1" jqk="'+im.k+'"  '+checked+'  /><div class="title">關閉 '+im.name+' </div></label>';
                    });

                    html +='<div class="action"> <button type="button" id="setting_save" >Save</button> </div>';

                    $("#ft_mask .inner").html(html);


                    setTimeout(function(){
                        $("#ft_mask .inner .box.chk input").on('change',function(){
                            console.log('change');
                            let hide = $(this).prop('checked');
                            let jqk = $(this).attr('jqk');
                           // console.log(jqk);
                           

                            // console.log(panel_setting);


                            let mass_change = function(target,is_hide){
                                panel_setting.filter(function(it){
                                    if(it.t==target){
                                        it.hide = (is_hide) ? '1':'0';
                                    }
                                });
                            }


                            if(hide){
                                if($(this).parent().hasClass('t1')){
                                    $("#ft_mask .t11 input").prop('checked',true);
                                    mass_change('t11',1);
                                }
                                if($(this).parent().hasClass('t2')){
                                    $("#ft_mask .t22 input").prop('checked',true);
                                    mass_change('t22',1);
                                }
                            }else{
                                if($(this).parent().hasClass('t1')){
                                    $("#ft_mask .t11 input").prop('checked',false);
                                    mass_change('t11',0);
                                }
                                if($(this).parent().hasClass('t2')){
                                    $("#ft_mask .t22 input").prop('checked',false);
                                    mass_change('t22',0);
                                }
                            }


                            


                            panel_setting.filter(function(it){
                                if(it.k==jqk){
                                    it.hide = (hide)? "1":"0" 
                                }
                            });


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

        /**  預先關閉該區域  */
        let js_to_css = function(){
            panel_setting.forEach((it) =>{
                console.log(it);
                if(it.hide=='1'){
                    $(it.k).addClass('xhide');
                }else{
                    $(it.k).removeClass('xhide');
                }
                
            });
        }


        let init = function(callbk){

            //  let data = null;
             $.post( "/wp-json/my_api/get_main_setting", function( data ) {
                 // $( ".result" ).html( data );
                 data = JSON.parse(data);
                 console.log(data);
 
                 return callbk(data);
               });            
         }


                 /**   Load data */
        init(function(data){
            main_setting =  data;
        });


        setTimeout(function(){
           
        
            check_editor = function(){
                    // console.log("全域"); 

            
                  let  last_main_setting = [
                      {
                          name:'搜尋小工具',
                          k:"#elementor-panel-elements-search-area",
                          hide:'0'
                      }
                  ];

                    let all_out_box = $("#elementor-panel-categories > div");
                    $(all_out_box).each(function(){
                        let title = $(this).find('.elementor-panel-category-title');
                        // console.log(title.text());
                        let key = "#"+$(this).attr('id');

                        let child = [];
                        $(this).find('.elementor-element-wrapper').each(function(idx){
                            child.push({
                                k:idx,
                                name: $(this).find('.title').text(),
                                hide:0
                            });
                        }); 

                        let temp = {
                            name:title.text(),
                            k:key,
                            hide:'0',                            
                        }

                        if(child.length>0){
                            temp.child = child;
                        }


                        last_main_setting.push(temp);
                    });




                    last_main_setting.push({
                        name:"底部選單",
                        k:'#elementor-panel-footer-tools',
                        hide:'0'
                    });



                    /** 同步資料庫  */
                    last_main_setting.forEach(function(it){

                        let save_val = main_setting.filter(function(obj) { return obj.k==it.k; });
                        if(save_val.length>0){
                            it.hide = save_val[0].hide;
                        }

                    });



                    console.log(last_main_setting);

                    

                    /**  render to form */
                    let html = "<h3>主選單</h3>";
                    last_main_setting.forEach(function(im){
                        let checked = "";


                            let inside_box = '';
                            /*
                            $(im.k).find('.elementor-element-wrapper').each(function(idx){
                                let me = $(this);                               
                                let title = $(this).find('.title').text();
                                inside_box +='<label class="box chk"><input type="checkbox"  name="aloha1" jqk="child'+idx+'"  '+checked+'  /><div class="title">關閉 '+ title+' </div></label> ';
                               //  console.log(title);
                            });
                            */


                            

                            if(im.name=='底部選單'){
                                html += "<h3>底部選單</h3>";
                            }
                            if(im.hide=='1'){ checked= "checked";}
                            html += '<div class="module"><label class="box chk"><input type="checkbox"  name="aloha1" jqk="'+im.k+'"  '+checked+'  /><div class="title">關閉 '+im.name+' </div></label>  <a href="#" class="open"></a>   <div class="sub-menu"><div class="ibx">'+inside_box+'</div></div></div>';
                    });

                    /*
                    html += "<h3>底部選單</h3>";
                    html += '<label class="box chk"><input type="checkbox"  name="aloha1" jqk="footer_menu"  /><div class="title">關閉 底部選單 </div></label>';
                    */
                    html +='<div class="action"> <button type="button" id="main_setting_save" >Save</button> </div>';



                    $("#ft_mask .inner").html(html);


                    setTimeout(function(){
                        $("#ft_mask .inner .box.chk input").on('change',function(){
                            console.log('change');
                            let is_hide = $(this).prop('checked');
                            let jqk = $(this).attr('jqk');
                           //  console.log(jqk);
                            // console.log(show);

                            last_main_setting.filter(function(it){
                                if(it.k==jqk){
                                    it.hide = (is_hide)? "1":"0" 
                                }
                            });

                            console.log(last_main_setting);
                        });
                    },10);

                    $(".module .open").on('click',function(){
                        $(this).parent().toggleClass('op');
                    });


                    $("#main_setting_save").on('click',function(){

                        console.log(last_main_setting);

                        /**  js control css first */
                        
                        $.post( "/wp-json/my_api/update_main_setting",{ data:last_main_setting } , function( data ) {                        
                        //   data = JSON.parse(data);
                        //  console.log(data);                      
                        });
                        

                    });
            }


            check_editor();


            

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




    
    /*
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
    */







})(jQuery);




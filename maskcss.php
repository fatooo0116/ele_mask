<?php    
    add_shortcode( 'maskcss', 'maskcss_func' );
    function maskcss_func( $atts ) {
        $atts = shortcode_atts( array(
            'foo' => 'no foo',
            'baz' => 'default baz'
        ), $atts, 'maskpanel' );
    
        ob_start();
        global $wpdb;
        $table_name =  $wpdb->prefix . 'mask_setting';;    
        $sql = "SELECT * FROM $table_name where id='1'";    
        $results = $wpdb->get_results($sql);
        $st1 = json_decode($results[0]->json);
        echo '<style>';
        foreach($st1 as $st){
            // print_r($st->name);
            echo ($st->hide=='1') ? $st->k."{ display:none; }" :'';           
        }
        echo '</style>';


        $sql = "SELECT * FROM $table_name where id='2'";    
        $results = $wpdb->get_results($sql);
        $st1 = json_decode($results[0]->json);

        echo '<style id="aloha_hide">';
        foreach($st1 as $st){
           
            if($st->k=='#elementor-panel-footer-tools'){
                if($st->hide=='1'){
                    echo '#elementor-panel-footer-settings{ display:none; } #elementor-panel-footer-navigator{ display:none; } #elementor-panel-footer-history{ display:none; } #elementor-panel-footer-responsive{ display:none; } ';
                }               
            }else{
                if($st->hide=='1'){
                    echo $st->k." { display:none; }";
                }
            }

      
            if(property_exists($st,'child')){
                // print_r($st->child);
                foreach($st->child as $child_st){
                    $idx = (int)$child_st->k + 1;
                           
                   echo ($child_st->hide=='1') ? " ".$child_st->p." .elementor-element-wrapper:nth-child(".$idx.") { display:none; }" :'';  
                }
            }

            
        }
        echo '</style>';




        $output = ob_get_contents();
        ob_end_clean();

        return $output;
    }




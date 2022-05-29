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
       // print_r($st1);
        echo '<style>';
        foreach($st1 as $st){
            // print_r($st->name);
            echo ($st->show!='1') ? $st->k."{ display:none; }" :'';           
        }
        echo '</style>';


        $output = ob_get_contents();
        ob_end_clean();

        return $output;
    }




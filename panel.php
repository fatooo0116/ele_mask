<?php 


    add_shortcode( 'maskpanel', 'panel_func' );

    function panel_func( $atts ) {
        $atts = shortcode_atts( array(
            'foo' => 'no foo',
            'baz' => 'default baz'
        ), $atts, 'maskpanel' );
    
        ob_start();





        ?>
           <!-- <script src="https://cdn.tailwindcss.com"></script> -->
            <div id="ft_mask">
                <div class="inner">
                </div><!-- inner -->
            </div>

        <?php
        $output = ob_get_contents();
        ob_end_clean();

        return $output;
    }


    


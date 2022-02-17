<?php 
    
    add_shortcode( 'maskpanel', 'panel_func' );

    function panel_func( $atts ) {
        $atts = shortcode_atts( array(
            'foo' => 'no foo',
            'baz' => 'default baz'
        ), $atts, 'maskpanel' );
    
        ob_start();
        ?>

            <div id="ft_mask">
                <div class="inner">
                    <ul class="layer1">
                        <li class="layer1_head">
                            <h3>FAVORITES</h3>
                            <div class="inner">
                                <div class="box">內部段 : <input type="text" name="n1"/></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="control">
                    <button type="button"  class="button" id="save_setting">SAVE</button>
                </div>
            </div>

        <?php
        $output = ob_get_contents();
        ob_end_clean();

        return $output;
    }


    


<?php

add_action( 'admin_menu', 'misha_options_page' );

function misha_options_page() {

	add_options_page(
		'Ele Mask', // page <title>Title</title>
		'Ele Mask', // menu link text
		'manage_options', // capability to access the page
		'aloha-slug', // page URL slug
		'misha_page_content', // callback function with content
		2 // priority
	);


}

function misha_page_content(){


	echo '<div class="wrap">
	<h1>Elementor覆蓋外掛</h1>
    <br/> <br/>
	<form method="post" action="options.php">';
			
		settings_fields( 'misha_settings' ); // settings group name
		do_settings_sections( 'aloha-slug' ); // just a page slug

        $text = get_option( 'ele_mask' );
        $ele_mask_panel = get_option( 'ele_mask_panel' );
        // echo  $ele_mask_panel;

       //  echo $text;

        // echo $ele_mask_panel;

        ?>
        <table style="font-size:16px;letter-spacing:1px;">
            <tr>
                <th scope="row">
                    <label for="ele_mask_panel">開啟編輯面板</label>
                </th>
                <td>           
                    <select name="ele_mask_panel" id="ele_mask_panel">
                        <option value="1" <?php if( $ele_mask_panel =='1'){ echo 'selected'; } ?> >開啟</option>
                        <option value="0" <?php if( $ele_mask_panel =='0'){ echo 'selected'; } ?> >關閉</option>
                    </select>
                </td>
            </tr>

            <tr>
                <th scope="row">
                    <label for="ele_mask">是否開啟覆蓋</label>
                </th>
                <td>           
                    <select name="ele_mask" id="ele_mask">
                        <option value="1" <?php if($text=='1'){ echo 'selected'; } ?> >開啟</option>
                        <option value="0" <?php if($text=='0'){ echo 'selected'; } ?> >關閉</option>
                    </select>
                </td>
            </tr>

        </table>

        <?php
		submit_button();

	echo '</form></div>';

}



add_action( 'admin_init',  'misha_register_setting' );

function misha_register_setting(){

	register_setting(
		'misha_settings', // settings group name
		'ele_mask', // option name
		'sanitize_text_field' // sanitization function
	);


    register_setting(
		'misha_settings', // settings group name
		'ele_mask_panel', // option name
		'sanitize_text_field' // sanitization function
	);

	add_settings_section(
		'some_settings_section_id', // section ID
		'', // title (if needed)
		'', // callback function (if needed)
		'aloha-slug' // page slug
	);

    /*
	add_settings_field(
		'homepage_text',
		'Homepage text',
		'misha_text_field_html', // function which prints the field
		'aloha-slug', // page slug
		'some_settings_section_id', // section ID
		array( 
			'label_for' => 'homepage_text',
			'class' => 'misha-class', // for <tr> element
		)
	);
    */

}

?>
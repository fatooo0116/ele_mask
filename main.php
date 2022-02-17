<?php

/**
 * Plugin Name: Elementor mask
 * Description: 
 * Plugin URI: 
 * Author: mike hsu
 * Version: 3.5.3
 * Author URI: https://elementor.com/?utm_source=wp-plugins&utm_campaign=author-uri&utm_medium=wp-dash
 *
 * */




require("panel.php");
require("api.php");



 function my_plugin_editor_styles(){

    /*
	wp_register_style( 'editor-style-1', plugins_url( 'assets/css/editor-style-1.css', __FILE__ ) );
	wp_register_style( 'editor-style-2', plugins_url( 'assets/css/editor-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
    */

	wp_enqueue_style( 'editor-style-1', plugins_url( 'assets/css/emask.css', __FILE__ ),'',rand(0,99999),'all');
	wp_enqueue_script( 'editor-script-1', plugins_url( 'assets/js/emask.js', __FILE__ ),'', array('jquery'),rand(0,9999), true );

		
	echo do_shortcode("[maskpanel]");


	/**  react */



}
add_action( 'elementor/editor/before_enqueue_styles', 'my_plugin_editor_styles' );



/* add css to admin */
add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
    wp_enqueue_style( 'editor-wp-admin', plugins_url( 'wp_admin/css/admin.css', __FILE__ ),'',rand(0,99999),'all');
    wp_enqueue_script( 'editor-wp-admin-script', plugins_url( 'wp_admin/js/admin.js', __FILE__ ),'', array('jquery'),rand(2,9999), true );
}








function add_attributes_to_elements( $element ) {

	if ( ! $element->get_settings( 'my-custom-setting' ) ) {
		return;
	}

	$element->add_render_attribute(
		'_wrapper',
		[
			'class' => 'my-custom-class',
			'data-my-custom-value' => 'my-custom-data-value',
		]
	);

	
}
add_action( 'elementor/frontend/before_render', 'add_attributes_to_elements' );









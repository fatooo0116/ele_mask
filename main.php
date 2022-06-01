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


register_activation_hook( __FILE__, 'product_meta_db' );
require "db/db.php";
require("option.php");




$is_open = get_option( 'ele_mask' );
$is_open_panel = get_option( 'ele_mask_panel' );



if($is_open_panel ){
	require("panel.php");
	require("api.php");
}


if($is_open){
	require("maskcss.php");
}



 function my_plugin_editor_styles(){

		wp_enqueue_style( 'editor-style-1', plugins_url( 'assets/css/emask.css', __FILE__ ),'',rand(0,99999),'all');			
		echo do_shortcode("[maskcss]");
		
}
if($is_open){
	add_action( 'elementor/editor/before_enqueue_styles', 'my_plugin_editor_styles' );
}





function my_plugin_editor_script(){	
	
		wp_enqueue_script( 'editor-script-1', plugins_url( 'assets/js/emask.js', __FILE__ ),'', array('jquery'),rand(0,9999), true );
		echo do_shortcode("[maskpanel]");
		wp_enqueue_script( 'editor-wp-admin-script', plugins_url( 'wp_admin/js/admin.js', __FILE__ ),'', array('jquery'),rand(3,9999), true );


	/**  react */
}
if($is_open_panel){
	add_action( 'elementor/editor/before_enqueue_styles', 'my_plugin_editor_script' );
}







/* add css to admin */
if($is_open){
	add_action('admin_head', 'my_custom_fonts');
}

function my_custom_fonts() {
    wp_enqueue_style( 'editor-wp-admin', plugins_url( 'wp_admin/css/admin.css', __FILE__ ),'',rand(0,99999),'all');
  
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

	// echo '<script> console.log("init"); </script>';

	
}
add_action( 'elementor/frontend/before_render', 'add_attributes_to_elements' );






add_action('wp_enqueue_scripts','load_scripts');
function load_scripts() {
  // wp_enqueue_script( 'modernizr', get_template_directory_uri() .'/js/modernizr.custom-2.6.2.min.js', array('jquery'), '0.1', true );

  wp_enqueue_script( 'editor-script-1', plugins_url( 'assets/js/emask_fe.js', __FILE__ ),'', array('jquery'),rand(0,9999), true );

  wp_enqueue_style( 'ele-mask', plugins_url( 'wp_admin/css/fe.css', __FILE__ ),'',rand(0,99999),'all');			


}







?>









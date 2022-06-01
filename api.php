<?php 


add_action('rest_api_init', function () {
    register_rest_route( 'my_api', 'get_setting',array(
        'methods'  => 'POST',
        'callback' => 'apiCallback',
        'permission_callback' => '__return_true',
    ));
});

function apiCallback() {
    //xxxxxxxxx


    global $wpdb;
    $table_name =  $wpdb->prefix . 'mask_setting';;    
    $sql = "SELECT * FROM $table_name where id='1'";    
    $results = $wpdb->get_results($sql);

    return $results[0]->json;
}



add_action('rest_api_init', function () {
    register_rest_route( 'my_api', 'update_setting',array(
        'methods'  => 'POST',
        'callback' => 'apiCallback2',
        'permission_callback' => '__return_true',
    ));
});

function apiCallback2() {
    //xxxxxxxxx
    
    global $wpdb;
    $table_name =  $wpdb->prefix . 'mask_setting';;    
    // $sql = "SELECT * FROM $table_name where id='1'";    
    // $results = $wpdb->get_results($sql);

    $data = json_encode($_POST['data']);
    $obj = array('json' => $data);

    $result = $wpdb->update( $table_name, $obj, array('id' => 1) );

   //  print_r($data);

    return $result;
}



/**  https://yoursite.com/wp-json/my_api/get_setting */







add_action('rest_api_init', function () {
    register_rest_route( 'my_api', 'get_main_setting',array(
        'methods'  => 'POST',
        'callback' => 'get_main_setting_fun',
        'permission_callback' => '__return_true',
    ));
});

function get_main_setting_fun() {
    //xxxxxxxxx


    global $wpdb;
    $table_name =  $wpdb->prefix . 'mask_setting';;    
    $sql = "SELECT * FROM $table_name where id='2'";    
    $results = $wpdb->get_results($sql);

    return $results[0]->json;
}







add_action('rest_api_init', function () {
    register_rest_route( 'my_api', 'update_main_setting',array(
        'methods'  => 'POST',
        'callback' => 'update_main_setting_fun',
        'permission_callback' => '__return_true',
    ));
});

function update_main_setting_fun() {
    //xxxxxxxxx
    
    global $wpdb;
    $table_name =  $wpdb->prefix . 'mask_setting';;    
    // $sql = "SELECT * FROM $table_name where id='1'";    
    // $results = $wpdb->get_results($sql);

    $data = json_encode($_POST['data']);
    $obj = array('json' => $data);

    $result = $wpdb->update( $table_name, $obj, array('id' => 2) );

   //  print_r($data);

    return $result;
}
<?php 


add_action('rest_api_init', function () {
    register_rest_route( 'my_api', 'get_setting',array(
        'methods'  => 'GET',
        'callback' => 'apiCallback',
        'permission_callback' => '__return_true',
    ));
});

function apiCallback() {
    //xxxxxxxxx

    return "xxx";
}


/**  https://yoursite.com/wp-json/my_api/get_setting */
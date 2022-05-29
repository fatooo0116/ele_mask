<?php
function product_meta_db() {
  global $wpdb;
  $charset_collate = $wpdb->get_charset_collate();
  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );


  

  /* 客戶地址分類  */
  $table_name = $wpdb->prefix . 'mask_setting';
  $sql = "CREATE TABLE $table_name (
    'id' int(50) NOT NULL AUTO_INCREMENT, 
    'json' json NOT NULL,
    
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );




}

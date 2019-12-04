<?php
// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes');
function rg_register_routes () {
  register_rest_route('rg-mail/v1', 'contact', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route'
  ));
}
// function for handling post request to new api route
function rg_serve_route () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'no-reply@wordpress.com';
  $to = 'matt.sprague@roostergrin.com';
  $subject = 'Rooster Grin Contact Form';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<html><body>';
  $message .= '<div class="container" style="background-color: #ebf5ff; padding: 1.5rem 0;">
  <div style="padding: 2rem 0; margin: 0 auto;"><img style="width: auto; height: 6rem; display: block; margin-left: auto; margin-right: auto; margin-bottom: 1rem;" src="https://www.roostergrin.com/wp-content/uploads/2019/11/rg-logo.png"><h1 style="font-size: 40px; margin: 0; text-align: center; width: 100%; color: #003b75;">Form Received!</h1></div></div>';
  $message .= '<div class="section" style="background-color: #fdfdfd;">';

  $message .= '<div class="container" style="padding: 4rem 32px 1rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<div class="card-holder" style="padding: 7px; background-color: #e6e6e6;">';
  $message .= '<div class="card-holder" style="padding: 2rem; background-color: white;">';

  $message .= '<table style="width: 100%; text-align: left"><tr>';
  $message .= '<th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">First Name</p></th>';
  $message .= '<th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">Last Name</p></th>';
  $message .= '</tr><tr>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['firstName'] . '</h5></td>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['lastName'] . '</h5></td>';
  $message .= '</tr></table>';

  $message .= '<table style="width: 100%; text-align: left"><tr>';
  $message .= '<th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">E-Mail</p></th>';
  $message .= '<th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">Phone</p></th>';
  $message .= '</tr><tr>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['clientEmail'] . '</h5></td>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['clientPhone'] . '</h5></td>';
  $message .= '</tr></table>';

  $message .= '<table style="width: 50%; text-align: left"><tr>';
  $message .= '<th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">First time patient?</p></th>';
  $message .= '</tr><tr>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['firstTime'] . '</h5></td>';
  $message .= '</tr></table>';

  $message .= '<table style="width: 100%; text-align: left"><tr>';
  $message .= '<th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">Message</p></th>';
  $message .= '</tr><tr>';
  $message .= '<td style="font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300;">' . $data['clientMessage'] . '</h5></td>';
  $message .= '</tr></table>';

  $message .= '</div>';
  $message .= '</div>';
  $message .= '</div>';

  $message .= '<div class="container" style="padding: 0 32px 4rem 32px; max-width: 1440px; margin: 0 auto"><p style="color: #3f3f3f;">This form was generated from <a href="#" target="blank" style="text-decoration: none">ClientWebsite.com</a></p></div>';
  $message .= '</div>';
  $message .= '</body></html>';

  $table_name = $wpdb->prefix . 'emails';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    `email` text NOT NULL,
    `message` text NOT NULL,
    UNIQUE (`id`)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

  dbDelta( $sql );

  $wpdb->insert($table_name, array(
    'email' => (string)$data['email'],
    'message' => (string)$message
  ));

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}

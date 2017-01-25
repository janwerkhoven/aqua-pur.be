<?php
    $message = $_REQUEST['message'];
    $email = $_REQUEST['email'];
    $telephone = $_REQUEST['telephone'];
    $to = 'Aquapur <vragen@aqua-pur.be>';
    //$to = 'Aquapur <vragen@aqua-pur.be>' . ', ';
    //$to .= 'jan.werkhoven@gmail.com';
    $subject = 'Bericht van websitebezoeker';
    /*
      $message    = '
      <html>
      <head>
      <title>Bericht van bezoeker op Aquapur website</title>
      </head>
      <body>
      <p>Email:' . $email .'</p>
      <p>Telefoon:' . $telephone .'</p>
      <p><br/>Bericht:<br/>' . $message . '</p>
      </body>
      </html>
      ';
     */
    $message = $message . "\r\n\r\nEmail: " . $email . "\r\nTelefoon: " . $telephone;
    //$headers = 'MIME-Version: 1.0' . "\r\n";
    //$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    //$headers .= 'To: Aquapur <vragen@aqua-pur.be>' . "\r\n";
    $headers .= 'From: Aquapur Website <no-reply@aqua-pur.be>' . "\r\n";
    //$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
    //$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";    
    mail($to, $subject, $message, $headers);
    echo "Succesful sended email to " . $to . ' (if no errors occured)';
?>
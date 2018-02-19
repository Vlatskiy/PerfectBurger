<?php

    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $street = $_POST['user_street'];
    $house = $_POST['user_house'];
    $liter = $_POST['user_liter'];
    $room = $_POST['user_room'];
    $floor = $_POST['user_floor'];
    $comment = $_POST['user_comment'];
    $payoption = $_POST['radiobutton'];

    $disturb = $_POST['checkbox1']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $liter . '</li>
            <li>Квартира: ' . $room . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';
    
    $to = 'baron.23ua@mail.ru';
    
    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail($to, 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
 echo json_encode($data);

?>
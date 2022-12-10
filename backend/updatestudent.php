<?php 

    require_once('connect.php');

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();

    $student_no = $data ['student_no'];
    $student_name = $data['student_name'];
    $course = $data['course'];
    $year = $data['year'];
    $email = $data['email'];
    $contact_no = $data['contact_no'];
    $address = $data['address'];

    $id = $_GET['id'];

    $query = mysqli_query($con, "update students_table set student_no = '$student_no', student_name = '$student_name', course = '$course', year = '$year', email = '$email', 
    contact_no = '$contact_no', address = '$address' where id = '$id' Limit 1");

    if($query){
        http_response_code(201);
        $message['status'] = 'Success....';
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>
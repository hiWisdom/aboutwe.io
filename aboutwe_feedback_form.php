<?php

$name = $_POST['aboutwe_feedback_form_name'];
$email = $_POST['aboutwe_feedback_form_emailaddress'];
$feedbackcomment = $_POST['aboutwe_feedback_form_comment'];

$to = "akpotororodje@gmail.com";
$subject = "aboutWE feedback survey";
$txt = "Name = ".$name." r\n Email = ".$email." r\n Message =" .$feedbackcomment;
$headers ="From: healthyharvestergroup@gmail.com". "r\n" . "CC: akpotororodje@yahoo.com";

if($email!=NULL) {
    mail($to,$subject, $txt, $headers);
}

header("Location:mailrecevied.html");
?>
<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$to = "rodney@adrodmedia.co.za, info@privi.co.za";
	$subject = "From Privi Contact Form";
	$project = $_POST['project'];
	$from = $_POST['email'];
	$company = $_POST['company'];
	$fname = $_POST['fname'];
	$phone = $_POST['phone'];
	$location = $_POST['location'];
	$contact = $_POST['contact'];
	$comment = $_POST['comment'];

	// data

	$msg = "Message $subject <br />
	----------------------------------------------------------------------------- <br />
	We need to: $project <br />
	Email: $from <br />
	Company Name: $company <br />
	Full Name: $fname <br />
	Phone Number: $phone <br />
	Location: $location <br />
	How did you hear about us: $contact <br />
	Message: <br />
	$comment <br />
	----------------------------------------------------------------------------- <br />
	End of message";


	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "comment" => "Something went wrong"]);
	}

?>

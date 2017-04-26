<?php
	//http://stackoverflow.com/questions/18382740/cors-not-working-php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
	if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        
            {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

	$mysql_host = "localhost";
	$mysql_database = "gproject";
	$mysql_user = "root";
	$mysql_password = "namal@123";
	// Create connection
	$conn = new mysqli($mysql_host, $mysql_user, $mysql_password,$mysql_database);
	
	if ($conn->connect_error) {
	echo("error");
	die("Connection failed: " . $conn->connect_error);
	}


    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
	if (isset($postdata)) {
		$request = json_decode($postdata);
		$placename = $request->username;

		if ($placename != "") {
			$sql = "SELECT uname,comment FROM comme WHERE pid LIKE '%$placename%'";
			$result = $conn->query($sql);
			$outp = "";

			while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
				$commentby=$rs["uname"];
				$comments= $rs["comment"] ;
				$sql1 = "SELECT photo FROM user WHERE name LIKE '%$commentby%'";
				$result1 = $conn->query($sql1);
				while($rs1 = $result1->fetch_array(MYSQLI_ASSOC)){
					$photo = $rs1["photo"];
				}

			if ($outp != "") {$outp .= ",";}
				$outp .= '{"uname":"' . $commentby . '",';
				$outp .= '"photo":"' . $photo.'",';
				$outp .= '"comment":"' . $comments . '"}';
				

			}
			$outp ='{ "records":[ '.$outp.' ]}';
			$conn->close();
			echo($outp);
			}
		else {
			echo "Empty username parameter!";
		}
	}
	else {
		echo "Not called properly with username parameter!";
	}
?>

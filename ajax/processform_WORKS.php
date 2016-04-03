<?php
//require 'ajax/process.php';  //TO CONNECT DATABASE CONNECTION
$servername = "LMCPORT01";//"gator3264"; 
$username = "PrintAdmin"; //"username";
$password = "Lmc1156";//"password";
$database = "PrinterSupply";

 //$db = new PDO('mysql:host=localhost;dbname=printersupplytesting', 'root', ''); //FOR WAMP: 
$db = new PDO('mysql:host=localhost;dbname=multi_printersupplytesting', 'multi_shylah', 'Chickweed'); //FOR HOSTGATOR

//$user_id = $_POST['user_id'];
$RequestDate = $_POST['RequestDate'];
$Location = $_POST['Location'];
$Phone = $_POST['Phone'];
$Requestor = $_POST['Requestor'];
$Email = $_POST['Email'];
$Comments = $_POST['Comments'];
$TotalQuantity = $_POST['TotalQuantity'];
$SNo = $_POST['SNo'];
$PrinterModel = $_POST['PrinterModel'];
$Toner = $_POST['Toner'];
$OrderingCode = $_POST['OrderingCode'];
$Quantity = $_POST['Quantity'];


// $SNo[$i]','$PrinterModel[$i]','$Toner[$i]','$OrderingCode[$i]','$Quantity[$i]

// foreach ( $array as $value ) {
//   // Do stuff with $value
// }

// foreach ( $array as $value ) {
//   // Do stuff with $value
// }

// foreach ( $array as $value ) {
//   // Do stuff with $value
// }

// foreach ( $array as $value ) {
//   // Do stuff with $value
// }

// foreach ( $array as $value ) {
//   // Do stuff with $value
// }



//$sql = "INSERT INTO MyGuests (firstname, lastname, email)
//VALUES ('John', 'Doe', 'john@example.com')";
 $sql = "INSERT INTO Orderheader (OrderNo,RequestDate,Location,Phone,Requestor,Email,Comments,TotalQuantity)
VALUES (1,'$RequestDate','$Location','$Phone','$Requestor','$Email','$Comments','$TotalQuantity')";



if ($db->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $db->error;
}


//if(sizeof($PrinterModel) >1){
if(is_array($PrinterModel)  == TRUE){





		for ($i = 0; $i < sizeof($PrinterModel); $i++)
		//for ($i = 0; $i < $_POST['PrinterModel']; $i++)
		//for(i=0;i<PrinterModel.length;i++)
		{
				// alert(mutli_education[i].value);
				//SupplyItem = Toner

			//     echo $_POST['NAME'][$i];
				
				//MULTIPLE ENTRY -S.B., 03/08/16				
				  $sql2 = "INSERT INTO Orderdetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
				 VALUES (1,'$SNo[$i]','$PrinterModel[$i]','$Toner[$i]','$OrderingCode[$i]','$Quantity[$i]')";	

				//SINGLE ENTRY -S.B., 03/08/16				
				//  $sql2 = "INSERT INTO Orderdetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
				// VALUES (1,'$SNo','$PrinterModel','$Toner','$OrderingCode','$Quantity')";	

				//VALUES (1,SNo,PrinterModel,Toner,OrderingCode,Quantity)";	

				if ($db->query($sql2) === TRUE) {
				    echo "New record created successfully";
				} else {
				    //echo "Error: " . $sql2 . "<br>" . $db->error;
				    echo "Error: " . $sql2 . "<br>" . $db->error . "printermodelsize(multi):  " . sizeof($PrinterModel);				    
				    
				}

				//COMMIT CALL ATTEMPT (MAY NOT BE NEEDED)
				// if (!$mysqli->commit()) {
				//     print("Transaction commit failed\n");
				//     exit();
				// }		


		}

}

else{

				$sql2 = "INSERT INTO Orderdetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
								VALUES (1,'$SNo','$PrinterModel','$Toner','$OrderingCode','$Quantity')";

				if ($db->query($sql2) === TRUE) {
				    echo "New record created successfully";
				} else {
				    //echo "Error: " . $sql2 . "<br>" . $db->error;
				    echo "Error: " . $sql2 . "<br>" . $db->error . "printermodelsize(single):  " . sizeof($PrinterModel);				    				    
				}									

}
//REPLACEMENT
// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }


// for ($i = 0; $i < $_POST['PrinterModel']; $i++)
// //for(i=0;i<PrinterModel.length;i++)
// {
// 		// alert(mutli_education[i].value);
// 		//SupplyItem = Toner

// 	//     echo $_POST['NAME'][$i];
// 		 $sql = "INSERT INTO Orderdetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
// 		VALUES (1,".$_POST['SNo'][$i].",".$_POST['PrinterModel'][$i].",".$_POST['Toner'][$i].",".$_POST['OrderingCode'][$i].",".$_POST['Quantity'][$i]")";	
// 		//VALUES (1,SNo,PrinterModel,Toner,OrderingCode,Quantity)";	

// 		if ($conn->query($sql) === TRUE) {
// 		    echo "New record created successfully";
// 		} else {
// 		    echo "Error: " . $sql . "<br>" . $conn->error;
// 		}

// 		if (!$mysqli->commit()) {
// 		    print("Transaction commit failed\n");
// 		    exit();
// 		}		


// }
//END REPLACEMENT

// //SupplyItem = Toner
//  $sql = "INSERT INTO OrderDetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
// VALUES (1,SNo,PrinterModel,Toner,OrderingCode,Quantity)";

// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }




 ?>
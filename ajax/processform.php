<?php



 //$db = new PDO('mysql:host=localhost;dbname=printersupply', 'root', 'MT1156av!');
$db = new PDO('mysql:host=localhost;dbname=multi_printersupplytesting', 'multi_shylah', 'Chickweed'); //FOR HOSTGATOR

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


//-----------------------------------



$printerSupplyQuery = "
    SELECT MAX(OrderNo) FROM orderheader";


    $stmt = $db->prepare($printerSupplyQuery);    

    $stmt->execute();

    $OrderNo = $stmt->fetchColumn() + 1;


$sql = "INSERT INTO orderheader (OrderNo,RequestDate,Location,Phone,Requestor,Email,Comments,TotalQuantity)
VALUES ( $OrderNo,CURRENT_TIMESTAMP(),'$Location','$Phone','$Requestor','$Email','$Comments','$TotalQuantity')";


if ($db->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $db->error;
}


if(is_array($PrinterModel)  == TRUE){





		for ($i = 0; $i < sizeof($PrinterModel); $i++)
		{
				


				  $sql2 = "INSERT INTO orderdetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
				 VALUES ($OrderNo,'$SNo[$i]','$PrinterModel[$i]','$Toner[$i]','$OrderingCode[$i]','$Quantity[$i]')";	

				//EMAIL LINE (READY TO USE WHEN SMTP IS CONFIGURED)										 
				//mail($Email	,"Toner Request(s) has been submitted","Your toner request order form has been submitted.  Thank you!");
//ERROR CHECK
				if ($db->query($sql2) === TRUE) {
				    echo "New record created successfully";
				} else {
				    //echo "Error: " . $sql2 . "<br>" . $db->error;
				    echo "Error: " . $sql2 . "<br>" . $db->error;  // . "printermodelsize(multi):  " . sizeof($PrinterModel);				    
				    
				 }
//END ERROR CHECK


		}

}

else{

//ORIGINAL (WITHOUT ORDERNO) -S.B., 03-10-16


				$sql2 = "INSERT INTO orderdetail (OrderNo,SNo,PrinterModel,SupplyItem,OrderingCode,Quantity) 
								VALUES ($OrderNo,'$SNo','$PrinterModel','$Toner','$OrderingCode','$Quantity')";	
				//EMAIL LINE (READY TO USE WHEN SMTP IS CONFIGURED)						
				//mail($Email	,"Toner Request(s) has been submitted","Your toner request order form has been submitted.  Thank you!");
//ERROR CHECK
				if ($db->query($sql2) === TRUE) {
				    echo "New record created successfully";

				} else {

				    echo "Error: " . $sql2 . "<br>" . $db->error; //. "printermodelsize(single):  " . sizeof($PrinterModel);				    				    
				}									
//END ERROR CHECK								

}


 ?>

<?php

   //$db = new PDO('mysql:host=localhost;dbname=printersupply', 'root', 'MT1156av!');
$db = new PDO('mysql:host=localhost;dbname=multi_printersupplytesting', 'multi_shylah', 'Chickweed'); //FOR HOSTGATOR


if(isset($_GET['printer'])){

$printerSupplyQuery = "
    SELECT * FROM printersupply";

try {

    $stmt = $db->prepare($printerSupplyQuery);    

    $stmt->execute(['printer_id' => $_GET['printer']]);   

    $selectedRow = $stmt->fetch(PDO::FETCH_ASSOC); 




    $results = $stmt->fetchAll();
} catch (Exception $ex) {
    printErrorMessage($ex->getMessage());
}
$returnArray = array();
if (count($results) > 0) {
     foreach ($results as $rs) {
        $returnArray[] = $rs;   
     }
}

$fp = fopen('tonerdata.json', 'w+');
fwrite($fp, json_encode($returnArray));
fclose($fp);


echo json_encode($returnArray);  //NEED TO PASS

}



?>
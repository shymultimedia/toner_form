
<?php


//FOR WAMP: 
 //$db = new PDO('mysql:host=localhost;dbname=printersupply', 'root', 'MT1156av!');
$db = new PDO('mysql:host=localhost;dbname=multi_printersupplytesting', 'multi_shylah', 'Chickweed'); //FOR HOSTGATOR


if(isset($_GET['Location'])){


$locationSupplyQuery = "
    SELECT Phone
    FROM locations
    WHERE UPPER(TRIM(Location))  = UPPER(TRIM(:location_id))";  

try {

    $stmt = $db->prepare($locationSupplyQuery);    

    $stmt->execute(['location_id' => $_GET['Location']]);    

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

$fp = fopen('locationdata.json', 'w+');
fwrite($fp, json_encode($returnArray));

fclose($fp);

 $tempString =  $returnArray[0][0];
  
echo json_encode($returnArray);
}



?>
<?php
require 'ajax/process.php';  //TO CONNECT DATABASE CONNECTION

// <IfModule mod_php5.c>
//     php_admin_flag engine on
// </IfModule>

$locationQuery = "
    SELECT 
        Location, 
        Phone
    FROM Location

";

 //var_dump($locationQuery);  

$location = $db->query($locationQuery);





//MOVED TO PROCESS.PHP -S.B., 03-01-16
$printerSupplyQuery = "
    SELECT * FROM PrinterSupply
";
$printerSupply = $db->query($printerSupplyQuery);





$printerQuery = "
    SELECT
        Model, PID
    FROM Printer
";




//DATA TO POPULATE PRINTER DROPDOWN (AND WRITE TO FILE) -S.B., 03-03-16
try {

    $stmt = $db->prepare($printerQuery);    
//    $stmt = $DB->prepare($printerSupplyQuery);    
//    $stmt = $DB->prepare($sql);
    $stmt->execute();
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

$fp = fopen('file4.json', 'w+');
fwrite($fp, json_encode($returnArray));
fclose($fp);

//DATA TO POPULATE LOCATION DROPDOWN -S.B., 03-03-16
$locationQuery = "SELECT Location from location";
try {

    $locationStmt = $db->prepare($locationQuery);    
//    $stmt = $DB->prepare($printerSupplyQuery);    
//    $stmt = $DB->prepare($sql);
    $locationStmt->execute();
    $results = $locationStmt->fetchAll();
} catch (Exception $ex) {
    printErrorMessage($ex->getMessage());
}
$returnArray = array();
if (count($results) > 0) {
     foreach ($results as $rs) {
        $returnArray[] = $rs;   
     }
 }

$tempArray = array();
 //echo $returnArray[1][0];
for ($x = 0; $x < count($returnArray); $x++) {
     //$tempArray.add($returnArray[$x][0]);
     array_push($tempArray, $returnArray[$x][0]);
// }      
    }

$fp = fopen('locations.json', 'w+');
fwrite($fp, json_encode($returnArray));
fclose($fp);

?>


<!DOCTYPE html>

<html>



    <head>
        <meta charset="utf-8">
        <title>Toner Request</title>
        
        <link rel="stylesheet" href="stylesheets/screen.css">
        <script src="js/jquery-1.12.1.min.js"></script>
<!--         <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/knockout/2.3.0/knockout-min.js"></script> -->
        <script type="js/knockout-min.js"></script>
        <script src="js/jquery.cascadingdropdown.js"></script>   
        <script src="js/main.js"></script>        


        
    </head>
    <body>
    	
        <main>

<!-- HEADER -S.B., 02/22/16         -->

            <header>

                <table border="0" width="100%">
                    <tr>

                        <td>&nbsp;</td>
                    </tr>
                </table>
            </header>

            <aside class="left">
                <ul>
<!--                     <li><a href="#" class="buttons_1" />Enrollment</a></li>
                    <li><a href="#" class="buttons_2" />Degree Programs</a></li>
                    <li><a href="#" class="buttons_3" />Financial Aid</a></li>
                    <li><a href="#" class="buttons_4" />Counseling</a></li>
 -->
                    <li><a href="#" class="buttons_small">Home</a></li>
                    <li><a href="#" class="buttons_small">New Request</a></li>
                    <li><a href="#" class="buttons_small">Documents</a></li>
                    <li><a href="#" class="buttons_small">Toner Requests</a></li>
                    <li><a href="#" class="buttons_small">Lists</a></li>
                    <li><a href="#" class="buttons_small">Printer Details</a></li>
                    <li><a href="#" class="buttons_small">Toner Details</a></li>
                    <li><a href="#" class="buttons_small">Notification</a></li>                                                            
                    <li><a href="#" class="buttons_small">Site Contents</a></li>                    
                </ul>
            </aside>


            <article>
<!-- <div id="printerDiv">             -->
                <form action="ajax/process.php" method="post" class="ajax">
<!--                 <img id="main_image" src="images/image1.jpg" />  -->
                <table width="100%"> <!-- BIG OL' TABLE -->
                    <tr>
                        <td class="toner_subHeader" span="100%" width="100%">Toner Request Form</td>
                    </tr>
                    <tr>  <!-- ROW THAT FORMS NEW TABLE -->
                        <td> <!-- TD THAT FORMS NEW TABLE -->
                            <table width="100%"> <!-- NEW TABLE -->
                                    <tr> <!--  BUTTONS -->
                                        <td>&nbsp;</td>                                
                                    </tr>

                                    <tr>
                                        <td class="section_label">Details</td>
                                    </tr>
                                    <tr> <!--  BUTTONS -->
                                        <td>&nbsp;</td>                                
                                    </tr>
<!--                 <form action="ajax/process.php" method="post" class="ajax"> FORM USED TO BE CALLED HERE-->
                                    <tr>
                                        <td width="15%" >
                                            Request Date
                                        </td> <!-- WILL AUTOPOPULATE VALUE= GETDATE SQL-S.B., 02-22-16 -->
                                        <td>
                                        
                                <input type="textbox" class="textbox_disabled" disabled="true" name="RequestDate" value=<?php  $b = time (); print(Date("m/d/y",$b));?> >
        <!--                                 <td width="10%"><input type="checkbox">Change Requestor</td> -->
        <!--                                 <input type="checkbox">Change Requestor -->
                                        </td>
                                    </tr>


                                    <tr>
                                        <td >
                                            Locations
                                        </td>

                                        <td>
                                             <select name="Location" class="Location">
                                                    <option value="test1">&nbsp;</option>
                                                  <?php  for( $x=0; $x < count($tempArray); $x++){ ?>
                                                    <option value="<?php echo $tempArray[$x]; ?>"><?php echo $tempArray[$x]; ?></option>
                                                  <?php } ?>
                                                  
<!--                                                   <option value="test2">test2</option> -->
                                            </select>                             
                                        </td>
                                    </tr>


                                    <tr>
                                        <td >
                                            Phone
                                        </td> <!-- WILL AUTO POPULATE -S.B., 02-22-16 -->
                                        <td>
                                        <!-- CLASS FOR PHONE WAS textbox_disabled -->
                                            <input type="textbox" class="phone_textbox" disabled="true" name="Phone">
                                        </td>
                                    </tr>

                                    <tr>
                                        <td >
                                            Requestor
                                        </td>

                                        <td>
                                            <input type="textbox" name="Requestor" class="textbox">
<!--                                              <select name="Requestor">
                                                  <option value="test1">test1</option>
                                                  <option value="test2">test2</option>
                                            </select>                             
 -->
                                         </td>
                                    </tr>

                                    <tr>
                                        <td >
                                            Email
                                        </td>
                                        <td>
                                            <input type="textbox" class="textbox" name="Email">
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                             &nbsp;
                                         </td>
                                    </tr>
        <!-- TONER DETAILS               *******************************************************************************      -->
                                    <tr>
                                        <td class="section_label">
                                                                    Printer Supplies
                                        </td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            &nbsp;
                                        </td>
                                    </tr>

                                    <tr>
                                         <td  colspan = "5" width="100%">

                                            <table width="100%" class="toner_table">

                                                <tr>
                                                    <td width="100%" class="row_label" colspan="5">
                                                        <table>
                                                            <tr>
                                                                     <td class="serial_no"> S. No</td> 
                                                                    <td class="dropdown_printer_model"> Printer Model</td>
                                                                    <td class="dropdown_toner"> Toner</td>
                                                                    <td class="ordering_code"> Ordering Code</td> 
                                                                    <td class="quantity"> Quantity</td> 
                                                                    <td class="add">&nbsp;</td>
                    
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                             </table>  <!-- END TONER TABLE -->
                                   
                                        </td>

                                    </tr>
                                    <tr> <!-- ROW WITH ACTUAL INPUT BOXES-->
                                            <td width="100%" colspan="5"> 
<!--                                                 <div id="printerDiv"> -->

                                                 <div id="printerDiv"> 
                                                    <table class="entriesTable">   
                                                        <tr class="row_toner_detail">                                    
        <!--                                                     <td class="serial_no">  -->
                                                            <td class="textbox_small_disabled">                                                     
    <!--                                                             <input type="textbox" class="textbox_small_disabled" name="SNo" disabled> -->
                                                                <span class = \"sNo_count\">&nbsp;</span>
                                                            </td>

                                                            <td class="dropdown_printer_model"> 
                                                                     <select class="dropdown_printer_model" name="PrinterModel">
                                                                       <option value="test1">&nbsp;</option>
                                                                          <?php  for( $x=0; $x < count($returnArray); $x++){ ?>
                                                                            <option value="<?php echo $returnArray[$x]; ?>"><?php echo $returnArray[$x]; ?></option>
                                                                          <?php } ?>                                                                                                                                             
                                                                      <!-- <option value="test1">test1</option>
                                                                      <option value="test2">test2</option> -->
                                                                    </select>                             
                                                            </td>
                                                            <td class="dropdown_toner"> 
                                                                     <select class="dropdown_toner" name="Toner">
                                                                       <option value="">&nbsp;</option>                                                                      
<!--                                                                           <option value="test1">test1</option>
                                                                          <option value="test2">test2</option> -->
                                                                    </select>                             
                                                            </td>


                                                            <td class="ordering_code" >
                                                                <input type="textbox" class="ordering_code" name="OrderingCode">
                                                            </td>
                                                            <td class="quantity"> 
                                                                <input type="textbox" class="quantity" name="Quantity">
                                                            </td>
                                                            <td class="add">

                                                                <a class="add_row_link" href="#"><img src="images/icon-add.png" class="addRowButton"></a>
    <!--                                                             <input type="image" class="addRowButton" text="Add" src="images/icon-add.png"> -->

                                                            </td>
                                                        </tr>
                                                    </table>
                                                            <!-- </div>  -->
                                                 </div>   <!-- END PRINTER DIV -S.B., 03-01-16   -->
                                            </td> <!-- END ENCLOSED TABLE  -->
                                    </tr> <!-- end dropdown table -->
<!--                                             </table>  WEIRD UNKNOWN TABLE TAG-->


<!--                                             </table>  MOVED WEIRD END TABLE TAG HERE (FROM COMMENT) -->

                            </table> <!-- END NEW TABLE -->
                        </td> <!-- END TD THAT FORMS NEW TABLE -->
                    </tr> <!-- END ROW THAT FORMS NEW TABLE -->

        <tr>
            <td>
                &nbsp;
            </td>

        </tr>
        <tr>
            <td width="10%">
                Total Quantity 
                <input type="label" value = "0" name="TotalQuantity">
            </td>

        </tr>

        <tr>
            <td>
                &nbsp;
            </td>

        </tr>        
        <tr>
            
           <td> Comments<textarea name="Comments" rows="2" cols="20" style="height:59px; width:70%;"></textarea></td>
        </tr> <!-- COMMENT BOX -S.B., 02-23-16 -->
        <!--                 </table>  END OF MAIN TABLE?-->  
        <!-- END TONER DETAILS               *******************************************************************************      -->


</table> <!-- END BIG OL' TABLE MAIN -->
                    </article>

</form>
<!-- </div>  END PRINTERDIV FOR PLUGIN -S.B. 03-02-16 -->

            <footer>
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                    <td>&nbsp;</td>
                    </tr>
                </table>



            </footer>
        </main>
    </body>

 
</html>

<!--
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
</body>
</html>
-->

<!--Force IE6 into quirks mode with this comment tag-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Welcome to Multifinity Media</title>

<LINK REL=StyleSheet HREF="CSS/update2.css" TYPE="text/css" MEDIA=screen>		

 <script src="Javascript/jquery-1.11.2.js"></script>
<script>jQuery.noConflict();</script>
<!--  <script src="Javascript/jquery.flexslider.js"></script> TOOK OUT -S.B., 04-21-15 -->
  <script src="Javascript/general.js"></script>

</head>
<?php
$servername = "localhost";//"gator3264"; 
$username = "multi_shylah"; //"username";
$password = "Chickweed";//"password";
$database = "multi_formExample1";
/*
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
*/
// Connecting, selecting database
mysql_connect($servername,$username,$password);
@mysql_select_db($database) or die( "Unable to select database");

/*$link = mysql_connect($servername, $username, $password)

or die('Could not connect: ' . mysql_error());

echo 'Connected successfully';
mysql_select_db('my_database') or die('Could not select database'); */

/*
$customer_name = $_POST['name'];
$customer_email = $_POST['email'];
*/

$customer_name = $name;
$customer_email = $email;


//$query= "INSERT INTO USER_INFORMATION VALUES ('$customer_name','$customer_email')";
$query= "INSERT INTO USER_INFORMATION VALUES ('$name','$email')";

mysql_query($query);
/*
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
*/
//$conn->close();



/* mysql_close(); */


?>
<body>

<div id="framecontentLeft">

<div class="innertube">

<h3>&nbsp;</h3> <!-- OPTIONAL UPPER LEFT CORNER TEXT -S.B., 02-04-16 -->
<!-- ISSSUES -->
	    <div class = "section">
            <div class="menutitle">
				<img src="images/arrow.gif" width="8" height="8" /> About us
			</div>
                <ul class="menulinks">
                   <li><a href="index_update1.html">What is Multifinity?</a></li>
                </ul>
        </div> <!-- END SECTION 6 -->

        <div class = "section"><!-- WHAT WE OFFER  -->    
            <div class="menutitle">
				<img src="images/arrow.gif" width="8" height="8" /> Our Services
			</div>
                <ul class="menulinks">
                   <li><a href="offer.html">What We Offer</a></li>
                </ul>
                    
        </div> <!-- END WHAT WE OFFER ->


        <!-- PRICING  -->    
        <div class = "section"><!-- WHAT WE OFFER  -->            
            <div class="menutitle">
				<img src="images/arrow.gif" width="8" height="8" /> The Breakdown
			</div>
                <ul class="menulinks">
                   <li><a href="pricing.html">Pricing</a></li>
                </ul>
             
        </div> <!-- END PRICING ->


       <!-- CONTACT  -->    
        <div class = "section"><!-- WHAT WE OFFER  -->    
            <div class="menutitle">
				<img src="images/arrow.gif" width="8" height="8" /> Contact Us
			</div>
                <ul class="menulinks">
                   <li><a href="contact_us.html">Contact Information</a></li>
                </ul>
        </div> <!-- END CONTACT ->
<!-- END ISSSUES -->
</div>
</div>

<div id="framecontentTop">
<div class="innertube">
<a href="http://google.com">&nbsp;</a>
<h1>&nbsp;/h1>
<h3>&nbsp;</h3>

</div>
</div>


<div id="maincontent">
<div class="innertube">

<h1><img src="CSS/headers/contact.gif" /></h1>
<p align="center">Multifinity Inc.</span></p>
		    <p align="center" class="p1">Shylah Barnes <br />
		      <a href="mailto:sbarnes@multifinity.net" class="style4">sbarnes@multifinity.net</a> <br />
	        (951)312-0971 </p>
            
          <!--  <p>Please submit your information and we will contact you shortly, thank you.  -->

Thank you, <?php echo $customer_name; ?>!<br>
Your email address is: <?php echo $customer_email; ?>


            </p>

<p>
<table border="1">
<tr><td>Name</td> <td>Email</td></tr>
<?php 
$result = mysql_query("SELECT * FROM USER_INFORMATION")
    or die (mysql_error());
while(	$row = mysql_fetch_array($result) ){
echo "<tr><td>"; 
  echo $row['NAME'];
  echo "</td><td>";   
  echo $row['EMAIL'];
  echo "</td>";    

  echo "</tr>";  

	}
?>            

</table>
</p>            
<p style="text-align: center">Please return to <a href="http://www.multifinity.com/index_update1.html">Home Page</a></p>

</div>
</div>

<?php
mysql_close(); 
?>
</body>

</html>

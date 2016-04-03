$(document).ready(function(){

//--------------- ON CLICK FUNCTIONALITY -S.B., 02-29-16 ------------------------	
//$('.addRowButton').on('click', function(){
$('.addRowButton').toggle(function(){




	//if ADD button -S.B., 02-29-16	 icon-add.png
		newRow = "<tr><td class=\"serial_no\"><span class = \"sNo_count\">&nbsp;</span></td><td class=\"dropdown_printer_model\"><select class=\"dropdown_printer_model\" name=\"PrinterModel\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"dropdown_toner\"><select class=\"dropdown_toner\" name=\"Toner\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"ordering_code\" ><input type=\"textbox\" class=\"ordering_code\" name=\"OrderingCode\"></td><td class=\"quantity\"><input type=\"textbox\" class=\"quantity\" name=\"Quantity\"></td><td class=\"add\"><a class=\"add_row_link\" href=\"#\"><img src=\"images/icon-add.png\" class=\"addRowButton\"></a></td></tr>";
		                                                


		$('.entriesTable').append(newRow);
		$(this).attr('src', 'images/icon-delete.png') ;

	},  //END if($(this).attr("src", "images/icon-add.png") )

	function(){
	// else if($(this).attr('src') == 'images/icon-delete.png') { //if DELETE button -S.B., 02-29-16			
		$(this).closest('row_toner_detail').remove();
	}

//--------------- END ON CLICK FUNCTIONALITY -S.B., 02-29-16 ------------------------	


//CASCADING PLUGIN -S.B., 02-29-16 -------------------------------------------------------------------

//END CASCADING PLUGIN -S.B., 02-29-16 ----------------------------------------------------------------

);



});  //END DOCUMENT READY

function clickRow(){

	if($(this).attr('src') == 'images/icon-add.png') { //if ADD button -S.B., 02-29-16	
//		newRow = "<tr><td class=\"serial_no\"><span class = \"sNo_count\">&nbsp;</span></td><td class=\"dropdown_printer_model\"><select class=\"dropdown_printer_model\" name=\"PrinterModel\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"dropdown_toner\"><select class=\"dropdown_toner\" name=\"Toner\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"ordering_code\" ><input type=\"textbox\" class=\"ordering_code\" name=\"OrderingCode\"></td><td class=\"quantity\"><input type=\"textbox\" class=\"quantity\" name=\"Quantity\"></td><td class=\"add\"><img src=\"images/icon-add.png\" class=\"addRowButton\"></td></tr>";
		newRow = "<tr><td class=\"serial_no\"><span class = \"sNo_count\">&nbsp;</span></td><td class=\"dropdown_printer_model\"><select class=\"dropdown_printer_model\" name=\"PrinterModel\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"dropdown_toner\"><select class=\"dropdown_toner\" name=\"Toner\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"ordering_code\" ><input type=\"textbox\" class=\"ordering_code\" name=\"OrderingCode\"></td><td class=\"quantity\"><input type=\"textbox\" class=\"quantity\" name=\"Quantity\"></td><td class=\"add\"><a class=\"add_row_link\" href=\"#\"><img src=\"images/icon-add.png\" class=\"addRowButton\"></a></td></tr>";
		                                                

		//MAKE HTML CODE, PUT IT IN A STRING, AND APPEND IT TO THE TABLE
		//$('<li></li>').html(images).appendTo('banner')
		//$(newRow).html(images).appendTo('entriesTable');
		$('.entriesTable').append(newRow);
		$('.entriesTable img:last').click(clickRow);
		//$(this).find('.add_row_link > img').href = "images/icon-delete.png";
		//$(this).find('.add_row_link > img').attr("src", "images/icon-delete.png") ;
		//$(this).find('img').attr("src", "images/icon-delete.png") ;
		$(this).attr('src', 'images/icon-delete.png') ;


	}  //END if($(this).attr("src", "images/icon-add.png") )

//	else if($(this).attr("src", "images/icon-delete.png") ){	//if OFF button -S.B., 02-29-16
	else if($(this).attr('src') == 'images/icon-delete.png') { //if ADD button -S.B., 02-29-16			
//		$(this).closest('row_toner_detail').remove();
		$(this).closest('tr').remove();
	}

}

$(document).ready(function(){

//--------------- ON CLICK FUNCTIONALITY -S.B., 02-29-16 ------------------------	
//$('.addRowButton').on('click', function(){
	$('.addRowButton').on('click', clickRow);

//	clickRow($(this));
//newRow = "<tr><td class=\"serial_no\"><span class = \"sNo_count\">&nbsp;</span></td><td class=\"textbox_small_disabled\"><input type=\"textbox\" class=\"textbox_small_disabled\" name=\"SNo\"></td><td class=\"dropdown_printer_model\"><select class=\"dropdown_printer_model\" name=\"PrinterModel\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"dropdown_toner\"><select class=\"dropdown_toner\" name=\"Toner\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"ordering_code\" ><input type=\"textbox\" class=\"ordering_code\" name=\"OrderingCode\"></td><td class=\"quantity\"><input type=\"textbox\" class=\"quantity\" name=\"Quantity\"></td><td class=\"add\"><img src=\"images/icon-add.png\" class=\"addRowButton\"></td></tr>";

//	if($(this).attr("src", "images/icon-add.png") ){ //if ADD button -S.B., 02-29-16


//--------------- END ON CLICK FUNCTIONALITY -S.B., 02-29-16 ------------------------	


//CASCADING PLUGIN -S.B., 02-29-16 -------------------------------------------------------------------

//END CASCADING PLUGIN -S.B., 02-29-16 ----------------------------------------------------------------


});  //END DOCUMENT READY

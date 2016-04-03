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

var printerDiv = new viewmodel();

//--------------- ON CLICK FUNCTIONALITY -S.B., 02-29-16 ------------------------	
//$('.addRowButton').on('click', function(){
	$('.addRowButton').on('click', clickRow);

//	clickRow($(this));
//newRow = "<tr><td class=\"serial_no\"><span class = \"sNo_count\">&nbsp;</span></td><td class=\"textbox_small_disabled\"><input type=\"textbox\" class=\"textbox_small_disabled\" name=\"SNo\"></td><td class=\"dropdown_printer_model\"><select class=\"dropdown_printer_model\" name=\"PrinterModel\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"dropdown_toner\"><select class=\"dropdown_toner\" name=\"Toner\"><option value=\"test1\">test1</option><option value=\"test2\">test2</option></select></td><td class=\"ordering_code\" ><input type=\"textbox\" class=\"ordering_code\" name=\"OrderingCode\"></td><td class=\"quantity\"><input type=\"textbox\" class=\"quantity\" name=\"Quantity\"></td><td class=\"add\"><img src=\"images/icon-add.png\" class=\"addRowButton\"></td></tr>";

//	if($(this).attr("src", "images/icon-add.png") ){ //if ADD button -S.B., 02-29-16


//--------------- END ON CLICK FUNCTIONALITY -S.B., 02-29-16 ------------------------	


//CASCADING PLUGIN -S.B., 02-29-16 -------------------------------------------------------------------

//END CASCADING PLUGIN -S.B., 02-29-16 ----------------------------------------------------------------
//$('.dropdown_printer_model').onChange(processPrinterSupply('.dropdown_printer_model.value'));
// $('.dropdown_printer_model').onChange(
// 		$.ajax({
// 		  type: "POST",
// 		  url: "database_process.php",
// 		  data: "name=John&location=Boston",
// 		  data: "name=John&location=Boston",
// 		  success: function(msg){
// 		    alert( "Data Saved: " + msg );
// 		  }
// 		}); 	

// 	);
//NEW SCHOOL
//  $('.dropdown_printer_model').on('change', function(){
// 							// var ajaxData = requiredValues;
// 							// ajaxData[this.el.attr('name')] = value;
// 							$.ajax({
// 							  type: "POST",
// 							  url: "ajax/database_process.php",
// 							  data: {printer: this.el.attr('name')}, 
// //							  data: "name=John&location=Boston",
// 							  success: function(msg){
// 							    alert( "Data Saved: " + msg );
// 							  }
// 							}); 	

// 		});
//END NEW SCHOOL
//JQUERY CASCADING DROPDOWN PLUGIN CODE ------------------------***************************************************************************

$('#printerDiv').cascadingDropdown({
    selectBoxes: [
        // {
        //     selector: '.step1',
        //     source: [
        //         { label: '4.0"', value: 4 },
        //         { label: '4.3"', value: 4.3 },
        //         { label: '4.7"', value: 4.7 },
        //         { label: '5.0"', value: 5 }
        //     ]
        // }, //end selector step1
        {
            // selector: '.step2',
            selector: '.dropdown_printer_model',            
            
            source: function(request, response) {

                $.getJSON('file4.json', request, function(data) {	
//                $.getJSON('ajax/process.php', request, function(data) {	
                    //var selectOnlyOption = data.length <= 1;
                    response($.map(data, function(item, index) {
//                        	if(item == self.val()){
                        	//if(item == this.val()){	
                        return {
	                            label: item.Model,
	                            value: item.Model,
	                            // selected: selectOnlyOption // Select if only option
	                            selected: index == 0 // Select first available option

	                            // label: item + 'p',
	                            // value: item,
	                            // // selected: selectOnlyOption // Select if only option
	                            // selected: index == 0 // Select first available option
	                        
                        };
                    }
                    //} //end if item == this.val
                    ));
                });
            }            

            // source: function(request, response) {
            //     $.getJSON('/api/resolutions', request, function(data) {
            //         var selectOnlyOption = data.length <= 1;
            //         response($.map(data, function(item, index) {
            //             return {
            //                 label: item + 'p',
            //                 value: item,
            //                 selected: selectOnlyOption // Select if only option
            //             };
            //         }));
            //     });
            // }
        },

        {
            //selector: '.step2',
            selector: '.dropdown_toner',            
            // requires: ['.step1'],
             requires: ['.dropdown_printer_model'],            
            source: function(request, response) {
                $.getJSON('tonerdata.json', request, function(data) {	
//                $.getJSON('ajax/process.php', request, function(data) {	
					//console.log(data);
                    //var selectOnlyOption = data.length <= 1;
                    response($.map(data, function(item, index) {
                        	//if(item == self.val()){
						//if(item == this.val()){                        		
                        return {
	                            label: item.Supply,
	                            value: item.Supply,
	                            // selected: selectOnlyOption // Select if only option
	                            selected: index == 0 // Select first available option


	                            // label: item + 'p',
	                            // value: item,
	                            // // selected: selectOnlyOption // Select if only option
	                            // selected: index == 0 // Select first available option
	                        
                        };
						//} //end if item == this.val
                    }));
                });
            }            
            // source: function(request, response) {
            //     $.getJSON('/api/resolutions', request, function(data) {
            //         var selectOnlyOption = data.length <= 1;
            //         response($.map(data, function(item, index) {
            //             return {
            //                 label: item + 'p',
            //                 value: item,
            //                 selected: selectOnlyOption // Select if only option
            //             };
            //         }));
            //     });
            // }
        }// },
//SELECTOR STEP3        
        // {
        //     selector: '.step3',
        //     requires: ['.step1', '.step2'],
        //     requireAll: true,
        //     source: function(request, response) {
        //         $.getJSON('/api/storages', request, function(data) {
        //             response($.map(data, function(item, index) {
        //                 return {
        //                     label: item + ' GB',
        //                     value: item,
        //                     selected: index == 0 // Select first available option
        //                 };
        //             }));
        //         });
        //     },

        //00000000000000000000000000000000000000000000000000000000000000000000000000000000000000
            onChange: function(event, value, requiredValues){
                // do stuff
//							example2.loading(true);

// 							var ajaxData = requiredValues;
// 							ajaxData[this.el.attr('name')] = value;
// //							$.getJSON('/api/phones', ajaxData, function(data) {
// 							$.getJSON('database_process.php', ajaxData, function(data) {	
// 								example2.phones(data);
// 								example2.loading(false);
// 							});

							printerDiv.loading(true);
							var ajaxData = requiredValues;
							ajaxData[this.el.attr('name')] = value;
							$.ajax({
							  type: "POST",
							  url: "ajax/database_process.php",
							  data: {printer: this.el.attr('name')}, 
//							  data: "name=John&location=Boston",
							   success: function(msg){
							     alert( "Data Saved: " + msg );
							  }
							}); 	
            }  //END onChange()
        //00000000000000000000000000000000000000000000000000000000000000000000000000000000000000

        // }  //END SELECTOR STEP3
    ]
});
//END JQUERY CASCADING DROPDOWN PLUGIN CODE -----------------------************************************************************************

});  //END DOCUMENT READY

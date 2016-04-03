//JQUERY CASCADING DROPDOWN PLUGIN CODE ------------------------
                $printer_source_data = json_encode($printer);
                $temp = $.parseJSON($printer_source_data);
$('#printerDiv').cascadingDropdown({
    selectBoxes: [
        {
            selector: '.dropdown_printer_model',
//            selector: '.step1',

            source: [
            	//for var key in $printer_source_data

			 //MOST RECENT           
            	// $.each($.parseJSON($printer_source_data), function(){
             //     { label: this.PID, value: this.Model }});
             //END MOST RECENT
	//ANOTHER TRY
     //        	 $.each($temp, function(label, value){             
					// { label: this.PID, value: this.Model },
     //        	 }
     //END ANOTHER TRY
            	
                // { label: '4.0"', value: 4 },
                // { label: '4.3"', value: 4.3 },
                // { label: '4.7"', value: 4.7 },
                // { label: '5.0"', value: 5 }
            source: function(request, response) {
                $.getJSON('ajax/process.php', request, function(data) {	
                    var selectOnlyOption = data.length <= 1;
                    response($.map(data, function(item, index) {
                        return {
                        	if(item == self.val()){
	                            label: item + 'p',
	                            value: item,
	                            selected: selectOnlyOption // Select if only option
	                        }
                        };
                    }));
                });
            }

            ]
        },
        {
            selector: '.dropdown_toner',
//            selector: '.step2',

            
//            requires: ['.step1'],
             requires: ['.dropdown_printer_model'],
//MY CODE ***********************************************************

            // source:  $.ajax({
            // 					url: 'ajax/process.php',
            // 					type:  'GET',
            // 					data: {printermodel:self.val()},
            // 					success:  function(data){ //WHAT IS COMING FROM THE PROCESS.PHP SQL CALL (ALL THE MODELS THAT MATCH PRINTER WILL COME UP)
            // 							//The AJAX call will retrieve all of the database info, regardless of matching.  Therefore:
            // 							//FOR EACH ROW RETRIEVED, IF THE PID = SELF.VAL, THEN MAKE IT PART OF THE DROPDOWN SELECTION (IE LABEL, VALUE)
            // 					}
            // 					// error:  function({

            // 					// })
//END MY CODE ***********************************************************

            source: function(request, response) {
                $.getJSON('ajax/process.php', request, function(data) {	
                    var selectOnlyOption = data.length <= 1;
                    response($.map(data, function(item, index) {
                        return {
                        	if(item == self.val()){
	                            label: item + 'p',
	                            value: item,
	                            selected: selectOnlyOption // Select if only option
	                        }
                        };
                    }));
                });
            }
           // },     
//            }),     

//self.val()
// ajax/process.php
//ORIGINAL
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

	//END ORIGINAL            
//OPTIONAL THIRD SELECTOR ****************************************************
	        }//,
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
	        //     onChange: function(event, value, requiredValues){
	        //         // do stuff
	        //     }
	        // }
//END OPTIONAL THIRD SELECTOR ****************************************************	        

    ]
});

//END JQUERY CASCADING DROPDOWN PLUGIN CODE -----------------------

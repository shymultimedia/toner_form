$('form.ajax').on('submit',function(){
//	console.log('Trigger');
	var that = $(this),
	url = that.attr('action'),
	type = that.attr('method'),
	data = {};


	that.find('[name]').each(function(index, value){
		//console.log(value);
		var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;
	});
	//console.log(data); //CONSOLE TEST -S.B., 02-24-16

	$.ajax({
		url: url,
		type: type,
		data:  data,
		success:  function(response){
			console.log(response);
		}

	});
	return false;
});

//IN PHP FILE, YOU'LL DO THE DATABASE CALLS
//IN JS FILE, YOU'LL CLEAR OUT THE FIELDS AND ALSO ADD ANOTHER ROW FIELD IF THE QUANTITY BUTTON IS CLICKED.  YOU'LL PROBABLY HAVE TO END UP DOING AN ARRAY
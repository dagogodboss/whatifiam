$('form.login').submit(function(e){
	var form = $(this);
	$('div.info').html('<h4><span style="color:#FFFFFF">Authenticating You into the Mobile Banking Portal...</span></h4>');
	$('button.btn-logon').prop({
		'disabled': 'disabled',
	});
	$.ajax({
		url: form.attr('action'),
		type: form.attr('method'),
		data: form.serialize(),
	})
	.done(function(res) {
		console.log(res);
		if (res === "0") {
			$('div.info').html('<h5><span style="color:#F8A8A8">Authentication Process Failed: Please check your details and Try again.</span></h5>');
			$('button.btn-logon').removeProp('disabled');
		} else {
			swal({
              title: "Authentication Successful",
              text: "Please click the green button to continue",
              type: "success",
              closeOnConfirm: false,
              confirmButtonColor: "green",
              confirmButtonText: "Ok, Continue",
              showLoaderOnConfirm: false,
            },
            function(isconfirm){
            	window.location = 'account.php'
            })			
		}
	})
	.fail(function() {
		
	})
	.always(function() {
		console.log("complete");
	});
	
	e.preventDefault();
})
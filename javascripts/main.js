$(document).ready(function(){
	$('.login-form').hide().fadeIn({duration:300, queue:false})
	$('#password').click(function(){
		$('.login-form .password-error').slideUp({duration:100, queue:false});
	})
	$('#userid').click(function(){
		$('.login-form .userid-error').slideUp({duration:100, queue:false});
	})




	$('.submit-btn').click(function(){
		var userid = $('#userid').val();
		var password = $('#password').val();
		console.log(userid,password)
		var con = true;
		if(userid.length == 0){
			$('.login-form .userid-error').slideDown({duration:300, queue:false});
			con = false;
		}
		if(password.length == 0){
			$('.login-form .password-error').slideDown({duration:300, queue:false});
			con = false;
		}
		if(con){
			console.log("aa");
		}
	})



	$('.register-form').hide().fadeIn({duration:300, queue:false})
	$('#email').click(function(){
		$('.register-form .email-error').slideUp({duration:100, queue:false});
	})
	$('#password').click(function(){
		$('.register-form .password-error').slideUp({duration:100, queue:false});
	})
	$('#confirm-password').click(function(){
		$('.register-form .confirm-password-error').slideUp({duration:100, queue:false});
	})
	$('#userid').click(function(){
		$('.register-form .userid-error').slideUp({duration:100, queue:false});
	})




	$('.register-btn').click(function(){
		var email = $('#email').val();
		var userid = $('#userid').val();
		var password = $('#password').val();
		var confirm_password = $('#confirm-password').val();
		console.log(userid,password)
		var con = true;
		if(email.length == 0){
			$('.register-form .email-error').slideDown({duration:300, queue:false});
			con = false;
		}
		if(userid.length == 0){
			$('.register-form .userid-error').slideDown({duration:300, queue:false});
			con = false;
		}
		if(password.length == 0){
			$('.register-form .password-error').slideDown({duration:300, queue:false});
			con = false;
		}
		if(password !== confirm_password || confirm_password.length == 0){
			$('.register-form .confirm-password-error').slideDown({duration:300, queue:false});
			con = false;
		}
		if(con){
			console.log("aabb");
		}
	})


})
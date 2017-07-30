var giatriten ; // create use to be called in ajax
window.onload = function() {
	var span_pass = document.getElementById("span_password");
	var span_username = document.getElementById("span_username");
	var span_email = document.getElementById("span_email");
	var span_birthday = document.getElementById("span_birthday");
}
// check emty username
function checkusername() {

	var  name = document.form.username;
	giatriten = name.value;
	if (giatriten == "")
	{
		span_username.innerHTML  = "Please input username";
		return false;
	}
	else
		span_username.innerHTML  = "";
		return true;
}
// check pasword from min to max
function checkpassword(minlength,maxlength) {
	var  pass = document.form.password;
	var lengthpassword = pass.value;
	if(lengthpassword <minlength || lengthpassword> maxlength) {
		span_password.innerHTML = "Please input form " + minlength + " to "+ maxlength ;
		return false;
	}
	else
		span_password.innerHTML  = "";
		return true;
}
// check email format 
function checkemail() {
	var email = document.form.email;
	var input_email = email.value;
	/* ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+") check before@
		((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$: check after
	*/
	var email_format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(input_email.match(email_format))
	{
		span_email.innerHTML  = "";
		return true;
	}
	else
		span_email.innerHTML = "Wrong format email";
		return false;
}
function checkdateformat() {
	var birthday = document.form.birthday;
	var input_birthday = birthday.value;
	var rule = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;// MM/DD/YYYY
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(input_birthday)) {
		span_birthday.innerHTML = "Wrong Date Format";
		return false;
	}
	span_birthday.innerHTML = "";
	return true;
}


function checkall() {
	checkusername()
	checkpassword(2,30)
	checkemail()
	checkdateformat()
	if(checkusername() && checkpassword(2,30) && checkemail() && checkdateformat()){
		var xhttp;
		// request ie 7 ie 8 chrome firefox
 		if (window.XMLHttpRequest) {
 			xhttp = new XMLHttpRequest();
 		}
 		else {
			// lower
 			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		}
		// do when receive result
 		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
 				document.getElementById("ajax_result").innerHTML = xhttp.responseText;
 			}
 		}
 		xhttp.open("GET", "result.php?username="+giatriten, true); 
 		xhttp.send();
	}
	else
		return false;
}
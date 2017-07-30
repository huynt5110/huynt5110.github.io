<!DOCTYPE>
<html>
	<head>
		<title>Demo jquery</title>
		<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
	</head>
	<body>
			<input id="text_a" type = "text"/></br>
			<input id="text_b" type = "text"/>
			<input type="button" id = "button" value = "add"/>
			<h3 id= "result"></h3>
		<script >
					$("#button").click(function(){
						var bien1 = $("#text_a").val();
						var bien2 = $("#text_b").val();
						$.get("xuly.php",{a:bien1 , b:bien2},function(data){
							$("#result").html(data);
						});
					});
		</script>	
	</body>
</html>
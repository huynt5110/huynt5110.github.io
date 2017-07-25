function dropdownthang() {
	var div = document.getElementById("div");
	var select = document.createElement("select");
	for(i = 1;i<13;i++)
	{
		var option = document.createElement("option");
		var textnode = document.createTextNode("Tháng "+i);
		option.appendChild(textnode);
		select.appendChild(option);
	}
	div.appendChild(select);
}
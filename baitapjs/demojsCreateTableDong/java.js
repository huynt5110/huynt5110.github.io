function taotable() {
	var sodongid= document.getElementById("sodong");
	var socotid= document.getElementById("socot");
	var divid = document.getElementById("container");
	console.log(sodongid.value);
	var sodong = parseInt(sodongid.value);
	var socot = parseInt(socotid.value);
	if(isNaN(sodong) || isNaN(socot)){
		alert("nhập vào dòng cột phải là số");
		return false;
	}
	else
	{	/*Tạo table: bao nhiêu dòng thì tạo bấy nhiêu tr,cột thì bấy nhiêu td
		<table>
			<tr>
				<td></td>
			</tr>
		</table>
		*/
		var table = document.createElement("table");
		table.border = 1;
		for(i=0;i<sodong;i++)
		{
			//tao the tr
			var tr = document.createElement("tr");
			table.appendChild(tr);
			//tao cot
			for(j=0;j<socot;j++)
			{
				var td = document.createElement("td");
				var textnode = document.createTextNode(i+"."+j);
				td.appendChild(textnode);
				tr.appendChild(td);
			}
		}
		divid.appendChild(table);
	}
}
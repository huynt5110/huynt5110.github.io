var d = new Date();
var month = d.getMonth();  // 6 because i start form 0
var year = d.getFullYear(); //2017
var alldayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var count = 1;
var div = document.getElementById("div_contain");
var currentday = d.getDate();
var curentmonth = d.getMonth();
var currentyear = d.getFullYear();
var flag = false;
function callfunction() {
	var firstDay = new Date(year, month, 1).toDateString();   // 1 7 2017
	var lastDay = new Date(year, month+1 , 0); //31 7 2017  put 0 in day, can't put 30 or 29 
	var days = new Date(year, month+1, 0).getDate(); //31   get max day of year and month 
	var day_name =  firstDay.substring(0, 3); //sat  name of day
	var index_day = alldayofweek.indexOf(day_name); //6  positon number
	if(flag == false)
		get_calendar(days ,index_day);
}
function get_calendar(days ,index_day) {
	var table = document.createElement('table');
	table.setAttribute('class','table');
	table.border = 2;
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	// create previous year <<
	var td_previousY = document.createElement('button');
	td_previousY.innerHTML = "<<";
	td_previousY.onclick = function() {
            if (year > 1950) {
                year--;
				//remove all child of div 
				while (div.firstChild) {
					div.removeChild(div.firstChild);
					}
					flag = false;
                callfunction();
            }
        };		
	td.appendChild(td_previousY);
	tr.appendChild(td);
	//create previous month <
	var td = document.createElement('td');
	var td_previousM = document.createElement('button');
	td_previousM.innerHTML = "<";
	td_previousM.onclick = function() {
            if (month > 0) {
                month--;
				while (div.firstChild) {
					div.removeChild(div.firstChild);
					}
					flag = false;
                callfunction();
            }
        };
	td.appendChild(td_previousM);
	tr.appendChild(td);
	//dropdown month anh year
	var td = document.createElement('td');
	var dropdown_month = document.createElement("select");
	for(i = 1;i<13;i++)
	{
		var option = document.createElement("option");
		option.value = i;
		if (i-1 == month) {
            option.selected = true;
        }
		var textnodeM = document.createTextNode("Tháng "+i);
		option.appendChild(textnodeM);
		dropdown_month.appendChild(option);
	}
	td.appendChild(dropdown_month);
	dropdown_month.onchange = function() {
		month = parseInt(this.options[this.selectedIndex].value);
		while (div.firstChild) {
			div.removeChild(div.firstChild);
		}
			flag = false;
            callfunction();
	}
	
	var dropdown_year = document.createElement("select");
	for (var j = 1950; j <= (d.getFullYear() + 50); j++) {
        var option = document.createElement('option');
		option.value = j;
		var textnodeM = document.createTextNode(j);
		option.appendChild(textnodeM);
        if (j == year) {
            option.selected = true;
        }
        dropdown_year.appendChild(option);
	}
	td.appendChild(dropdown_year);
	td.colSpan = 3;
	dropdown_year.onchange = function() {
		year = parseInt(this.options[this.selectedIndex].value);
		while (div.firstChild) {
			div.removeChild(div.firstChild);
		}
			flag = false;
            callfunction();
	}
	tr.appendChild(td);
	//create previous month >
	var td = document.createElement('td');
	var td_nextM = document.createElement('button');
	td_nextM.innerHTML = ">";
	td_nextM.onclick = function() {
            if (month > 0) {
                month++;
				if(month >12){
					month = 1;
					year+=1;
				}
				while (div.firstChild) {
					div.removeChild(div.firstChild);
					}
					flag = false;
                callfunction();
            }
        };	
	td.appendChild(td_nextM);
	tr.appendChild(td);
	// create previous year >>
	var td = document.createElement('td');
	var td_nextY = document.createElement('button');
	td_nextY.innerHTML = ">>";
	td_nextY.onclick = function() {
            if (year < 2067) {
                year++;
				while (div.firstChild) {
					div.removeChild(div.firstChild);
					}
					flag = false;
                callfunction();
            }
        };		
	td.appendChild(td_nextY);
    tr.appendChild(td);
	table.appendChild(tr);
	//Print day in week
    tr = document.createElement('tr');
    for (var nameofday = 0; nameofday <= 6; nameofday++) {
        td = document.createElement('td');
        td.innerHTML = alldayofweek[nameofday];
        tr.appendChild(td);
    }
    table.appendChild(tr);
	//Print day empty in month
    tr = document.createElement('tr');
	var c;
    for (c = 0; c <= 6; c++) {
        if (c == index_day) {
            break;
        }
        td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
	table.appendChild(tr);
	//day in month
	for (; c <= 6; c++) {
            td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
    table.appendChild(tr);
	for (var r = 0; r <= 4; r++) {
            tr = document.createElement('tr');
            for ( c = 0; c <= 6; c++) {
				if(count>days)
				{
					table.appendChild(tr);
					break;
				}
				if (count-1 == currentday && month == curentmonth && year == currentyear) {
                td.style.cssText = "background-color: blue";
            }
				td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
	count = 1;
	// create table
	div.appendChild(table);
	flag = true;
}
	


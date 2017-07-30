var date = new Date();
var month = date.getMonth();  // 6 because i start form 0
var year = date.getFullYear(); //2017
var alldayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var div = document.getElementById("div_contain");
var table = document.getElementsByClassName("table");
var textbox = document.getElementById("birthday");
var currentday = date.getDate();// get current day
var curentmonth = date.getMonth();
var currentyear = date.getFullYear();
var flag = false;
function callfunction() {
	div.style.display = "block"; // when user click on input table will appear
	var firstDay = new Date(year, month, 1).toDateString();   // 1 7 2017
	var lastDay = new Date(year,month+1 , 0); //31 7 2017  put 0 in day, can't put 30 or 29 
	var days = new Date(year, month+1, 0).getDate(); //31   get max day of year and month 
	var day_name =  firstDay.substring(0, 3); //sat  name of day
	var index_day = alldayofweek.indexOf(day_name); //6  positon number
	if(flag == false)
	{
		get_calendar(days ,index_day);
	}
}
/* Create canlendar 
	
*/
function get_calendar(days ,index_day) {
	var table = document.createElement('table');
	table.setAttribute('class','table');
	table.border = 1;
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
        } else {
			alert("Too far from current year");
		}
        };		
	td.appendChild(td_previousY);
	tr.appendChild(td);
	//create previous month <
	var td = document.createElement('td');
	var td_previousM = document.createElement('button');
	td_previousM.innerHTML = "<";
	td_previousM.onclick = function() {
        if (month >= 0) {
            month--;
			//month start from 0 so -1 mean month 12 of pervious year
			if(month == -1){
				month = 11;
				year-=1;
			}
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
	for(index_month = 1;index_month<13;index_month++)
	{
		var option = document.createElement("option");
		option.value = index_month;
		if (index_month-1 == month) {
            option.selected = true;
        }
		var textnodeM = document.createTextNode("Tháng "+index_month);
		option.appendChild(textnodeM);
		dropdown_month.appendChild(option);
	}
	td.appendChild(dropdown_month);
	dropdown_month.onchange = function() {
		month = parseInt(this.options[this.selectedIndex].value -1);
		while (div.firstChild) {
			div.removeChild(div.firstChild);
		}
			flag = false;
            callfunction();
	}
	var dropdown_year = document.createElement("select");
	for (var index_year = 1950; index_year <= (date.getFullYear() + 50); index_year++) {
        var option = document.createElement('option');
		option.value = index_year;
		var textnodeM = document.createTextNode(index_year);
		option.appendChild(textnodeM);
        if (index_year == year) {
            option.selected = true;
        }
        dropdown_year.appendChild(option);
	}
	td.appendChild(dropdown_year);
	td.colSpan = 3;
	// year dropdown change
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
        if (month >= 0) {
            month++;
			if(month == 12){
				month = 0;
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
		else {
			alert("Too far from current year");
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
	//If  < day_index will be "" in month
    tr = document.createElement('tr');
	var checkday= 0;
    for (checkday ; checkday <= 6; checkday++) {
        if (checkday == index_day /*first day of month*/) {
            break;
        }
        td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
	table.appendChild(tr);
	//day in month
	daynumber = 1;
	for (checkday; checkday <= 6; checkday++) {
            td = document.createElement('td');
            td.innerHTML = daynumber;
			td.onclick = choseDate;
            daynumber++;
            tr.appendChild(td);
    }
    table.appendChild(tr);
	for (var row = 0; row <= 4; row++) {
        tr = document.createElement('tr');
        for ( colum = 0; colum <= 6; colum++) {
			if(daynumber>days)
			{
				table.appendChild(tr);
				break;
			}
			//when currentday,current,current year mark with blue
			if (daynumber-1 == currentday && month == curentmonth && year == currentyear) {
			td.style.cssText = "background-color: blue";
			}
			td = document.createElement('td');
			td.innerHTML = daynumber;
			td.onclick = choseDate;
			daynumber++;
			tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	// create table
	div.appendChild(table);
	flag = true;// if flag true div will not create table
}
function choseDate() {
		var userchoose;  // get day user choose
		userchoose = this.innerHTML + "/" +(parseInt(month)+1) + "/" + year ;
		textbox.value = userchoose;
		div.style.display = "none"; 
    }

	


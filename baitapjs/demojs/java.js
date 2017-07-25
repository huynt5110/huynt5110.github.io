function KiemtraNhap(giatri) {
	if(giatri == 8){
		alert("so am");
	}
}
function Xeploaihocluc(dtb) {
	var thongbao="";
	switch(dtb)
	{
		case 8:
		thongbao ="Gioi"; break;
		case 6: 
		thongbao ="Kha"; break;
		default:
		thongbao ="Rot";
	}
	return thongbao;
}
function changeColor (choose) {
	var txt = document.getElementById("textbox");
	if(choose ==1) {
		txt.style.border ="solid 5px red";
	}
	else {
		txt.style.border ="solid 1px gray";
	}
}
function thaydoi(){
	var b = document.getElementById("chon");
	var a = document.getElementById("xuat");
	a.innerHTML = b.value ;
}
function tinhtong() {
	var soa= document.getElementById("soa");
	var sob= document.getElementById("sob");
	var ketqua = document.getElementById("ketqua");
	if(isNaN(soa.value) || isNaN(sob.value)){
		alert("nhập vào số a và số b");
		return false;
	}
	else
	{
		soa = parseFloat(soa.value);
		sob = parseFloat(sob.value);
		var tong= soa + sob;
		ketqua.value = tong;
	}
}

	
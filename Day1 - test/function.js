
function contactMe(){
		let para = document.createElement('p');
		let phone = document.createTextNode("Ph: (+91)6301341478");
		let myMail = document.createTextNode("Mail: help-desk@codegnan.com");
		let myLocation1 = document.createTextNode("Current Location: ");
		let myLocation2 = document.createTextNode("H.No 40-5-19/16, Prasad Naidu Complex, Vijayawada, Andhra Pradesh, ");
		let myLocation3 = document.createTextNode("India. 520002. ");
		let brk1 = document.createElement('br');
		let brk2 = document.createElement('br');
		let brk3 = document.createElement('br');
		let brk4 = document.createElement('br');
		let brk5 = document.createElement('br');
		para.setAttribute("id", "myContact");
		para.appendChild(phone);
		para.appendChild(brk1);
		para.appendChild(myMail);
		para.appendChild(brk2);
		para.appendChild(myLocation1);
		para.appendChild(brk3);
		para.appendChild(myLocation2);
		para.appendChild(brk4);
		para.appendChild(myLocation3);
		para.appendChild(brk5);
		document.getElementById("contact").appendChild(para);
		document.getElementById("contactNum").remove();
		
}
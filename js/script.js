function illuminateRed() {
 if (document.getElementById('stopLight').style.backgroundColor == "black") 
 {
   document.getElementById('stopLight').style.backgroundColor = "red";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
else {	
	document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}}
document.getElementById('stopButton').onclick = illuminateRed;

function illuminateYellow() {
	if (document.getElementById('slowLight').style.backgroundColor == "black")
	{
  document.getElementById('slowLight').style.backgroundColor = "yellow";
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
 else {document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}}

document.getElementById('slowButton').onclick = illuminateYellow;

function illuminateGreen() {
	if (document.getElementById('goLight').style.backgroundColor == "black")
	{
  document.getElementById('goLight').style.backgroundColor = "green";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('stopLight').style.backgroundColor = "black";
}
 else {document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";

}}

document.getElementById('goButton').onclick = illuminateGreen;
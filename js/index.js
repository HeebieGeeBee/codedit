function update() 
{
var frame = document.getElementById('output');
var frameDoc = frame.contentDocument || frame.contentWindow.document;
var w = document.getElementById("code").value;
document.getElementById('output').contentWindow.document.write(w);
}

document.onload = function() {

update();



}
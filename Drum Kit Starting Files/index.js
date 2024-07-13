//document.querySelectorAll("button").forEach("click",handleclick);
//document.querySelector("button").addEventListener("click",handleclick);

var bs = document.querySelectorAll(".drum").length;
for(var i=0;i<bs;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
//document.querySelector("button").addEventListener();
function handleclick()
{
    alert("I got clicked!");
}
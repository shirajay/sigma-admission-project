function scrollToForm(){
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

document.getElementById("admissionForm").addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let course=document.getElementById("course").value;

if(name===""||email===""||phone===""||course===""){
alert("Please fill all required fields!");
return;
}
if(phone.length!==10){
alert("Phone number must be 10 digits!");
return;
}
alert("Application Submitted Successfully!");
this.reset();
});
function func(){
    var a=document.getElementById('namefield');
    var b=document.getElementById('namefield2');
    var c=document.getElementById('email');
    var d=document.getElementById('password');
    var e=document.getElementById('password2');
    var f=document.getElementById('strength');
    var g=document.getElementById('message');
if(a.value==""||b.value==""||c.value==""||d.value==""||e.value==""){
    alert("All fields are mandatory");
    return false;
}
if(d.value!=e.value){
    alert("Please enter same password");
    return false;
}
else{
    true;
}
}
function val(){
    var a=document.getElementById('namefield');
    var b=document.getElementById('password');
if(a.value==""||b.value==""){
        alert("All fields are mandatory");
return false;
}
else{
    true;
}
}
function formValidation()
{

var uname = document.registration.username;
var cname = document.registration.company_name;
var mobile = document.registration.mobile;
var uemail = document.registration.email;
if(allLetter(uname))
{
if(allLetter(cname))
{

if(allnumeric(mobile))
{ 
if(ValidateEmail(uemail))
{
} 
}
}
}

return false;

} 
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert("first");
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function allLetters(cname)
{ 
var letters = /^[A-Za-z]+$/;
if(cname.value.match(letters))
{
return true;
}
else
{
alert("second");
alert('Company Name must have alphabet characters only');
cname.focus();
return false;
}
}

function allnumeric(mobile)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
}
if(ufsex.checked)
{
x++; 
}

if (x==2)
{
alert('Both Male/Female are checked');
ufsex.checked=false
umsex.checked=false
umsex.focus();
return false;
}

if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
function regvalidation()

{  
   

    // var mobile=/^(0|[+91]{3})?[7-9][0-9]{9}$/;  /^[6-9]{1}[0-9]{2}[0-9]{3}[0-9]{4}/  /^[7-9][0-9]{9}$/ ^\d{10}$/ /^\+[0-9]{2,3}-[0-9]\d{10}/

    var mobile=/^\d{10}$/

    // if(mobileno.length==10)
    // if(document.getElementById("phone").value.match(mobile))
    // {  
    //     document.getElementById('phoneinvalid').style.color='green'
    //     document.getElementById('phoneinvalid').innerHTML='Correct';

    // }
    // else{
    //     document.getElementById('phoneinvalid').style.color='red'
    //     document.getElementById('phoneinvalid').innerHTML='Mobile Number must be digits only ';
        
    // }

    if(inputtxt.value.match(mobile))
    {
    return true;
    }
  else
    {

    return false;
    }
    
    var Name = /^[A-Za-z]+$/;
    if(document.getElementById('name').value.match(Name)){
        document.getElementById('txtname').style.color='green'
        document.getElementById('txtname').innerHTML='Correct';
    }
 else{
    document.getElementById('txtname').style.color='red'
    document.getElementById('txtname').innerHTML='Name must be only characters';
 }


 
     var Email= "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z.-]+$";



     if(document.getElementById("workEmail").value.match(Email)){
        document.getElementById('txtemail').style.color='green'
        document.getElementById('txtemail').innerHTML='Correct';
     }
    else{
        document.getElementById('txtemail').style.color='red'
        document.getElementById('txtemail').innerHTML='please enter correct email id';
    }

    document.getElementById("company").value
     var Company = /^[A-Za-z]+$/;
    if(document.getElementById("company").value.match(Company ))
   {
    document.getElementById('txtcompany').style.color='green'
        document.getElementById('txtcompany').innerHTML='Correct';
    }
    else{
        document.getElementById('txtcompany').style.color='red'
        document.getElementById('txtcompany').innerHTML='company name must be characters';
    }

}

function phoneNumberValidation(phoneNumber)  
{  
    var phoneno = /^\d{10}$/;  
    if(phoneNumber.match(phoneno))  
    {  
        return true;  
    }  
    else  
    {  
        var div = document.getElementById('phone_error');
        div.innerHTML = "* Enter valid 10 digit number like this 9876543210.";
        return false;
    }  
} 

function validate(){
    var valid = true;
    var f_name = document.getElementById('f_name').value;
    var l_name = document.getElementById('l_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var retype_password = document.getElementById('re_password').value;
    var gender = document.getElementById('gender').value;
    var language = document.getElementsByClassName('language');
    var checkedData=[];
    var numOfCheckbox = language.length;
    var getCheckboxData; 
    for(i=0; i<numOfCheckbox;i++)
    {
        if(language[i].checked==true)
        {
            checkedData.push(language[i].value);
        }
    }
    var country = document.getElementById('country').value;
    var phone = document.getElementById('phone').value;
    
    if(f_name=='' || f_name==null)
    {
        valid=false;
        var div = document.getElementById('f_name_error'); 
        div.innerHTML = "* Please enter firstname.";
    }
    else
    {
        document.getElementById('f_name_error').innerHTML='';
    }

    if(l_name=='' || l_name==null)
    {
        valid=false;
        var div = document.getElementById('l_name_error');
        div.innerHTML = "* Please enter lastname.";
    }
    else
    {
        document.getElementById('l_name_error').innerHTML='';
    }

    if(email=='' || email==null)
    {
        valid=false;
        var div = document.getElementById('email_error');
        div.innerHTML = "* Please enter email.";
    }
    else
    {
        document.getElementById('email_error').innerHTML='';
    }

    if(password=='' || password==null)
    {
        valid=false;
        var div = document.getElementById('password_error');
        div.innerHTML = "* Please enter password.";
    }
    else
    {
        document.getElementById('password_error').innerHTML='';
    }

    if(retype_password=='' || retype_password==null)
    {
        valid=false;
        var div = document.getElementById('re_password_error');
        div.innerHTML = "* Retype your password here.";
    }
    else
    {
        document.getElementById('re_password_error').innerHTML='';
    }

    if(checkedData=='' || checkedData==null)
    {
        valid=false;
        var div = document.getElementById('language_error');
        div.innerHTML = "* Please choose any language.";
    }
    else
    {
        document.getElementById('language_error').innerHTML='';
    }

    if(country=='' || country==null)
    {
        valid=false;
        var div = document.getElementById('country_error');
        div.innerHTML = "* Please choose your country.";
    }
    else
    {
        document.getElementById('country_error').innerHTML='';
    }

    if(phone=='' || phone==null)
    {
        valid=false;
        var div = document.getElementById('phone_error');
        div.innerHTML = "* Please enter your phone number.";
    }
    else
    {
        document.getElementById('phone_error').innerHTML='';
    }

    if(phone!='')
    {
        valid = phoneNumberValidation(phone);
    }

    if(password!='' && retype_password!='')
    {
        if(password != retype_password)
        {
            valid=false;
            var div = document.getElementById('re_password_error');
            div.innerHTML = "* Password do not match. Please check it.";
        }
        
        if(password == retype_password)
        {
            document.getElementById('re_password_error').innerHTML='';
        }
    }

    if(valid==false)
    {
        return false;
    }
    else
    {
        alert("You form is ready to submit.");
        return true;
    }    
}
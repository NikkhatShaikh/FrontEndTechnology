    
   function validate() {
    //alert("working");
    if (document.myForm.name.value == "") {
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
        alert(" In User Name Enter Only  characters");
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.workEmail.value == "") {
        alert("Enter a working email Id");
        document.myForm.workEmail.focus();
        return false;
    }

    
    if (document.myForm.mobileNumber.value == "") {
        alert("Enter valid mobile no");
        document.myForm.mobileNumber.focus();
        return false;
    }
    
   
if (document.myForm.company.value == "") {
    alert("Enter a companay name");
    document.myForm.company.focus();
    return false;
}
if (!/^[a-zA-Z]*$/g.test(document.myForm.company.value)) {
    alert(" In company Name Enter Only  characters");
    document.myForm.company.focus();
    return false;
  }

} 
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   


   
   
   
   // function validation(){

    //     var userName = document.getElementById('userName').value;
    //     var workEmailId = document.getElementById('workEmailId').value;
    //     var mobileNumber = document.getElementById('mobileNumber').value;
    //     var companyName = document.getElementById('companyName').value;
        
    //     if(userName == ""){
    //         document.getElementById('userName').innerHTML =" * User Name is Required !";
    //         return false;
    //     }
    //     if((userName.length <= 2) || (userName.length > 20)) {
    //         document.getElementById('userName').innerHTML =" *User Name lenght must be between 2 and 20 !";
    //         return false;	
    //     }
    //     if(!isNaN(userName)){
    //         document.getElementById('userName').innerHTML =" *only characters are allowed !";
    //         return false;
    //     }

    //     if(workEmailId == ""){
    //         document.getElementById('workEmailId').innerHTML ="* Please fill the email field !";
    //         return false;
    //     }
    //     if(workEmailId.indexOf('@') <= 0 ){
    //         document.getElementById('workEmailId').innerHTML ="* @ Invalid Position !";
    //         return false;
    //     }

    //     if((workEmailId.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
    //         document.getElementById('workEmailId').innerHTML =" *. Invalid Position !";
    //         return false;
    //     }

    //     if(mobileNumber == ""){
    //         document.getElementById('mobileNumber').innerHTML =" *Please fill the mobile Number field !";
    //         return false;
    //     }
    //     if(isNaN(mobileNumber)){
    //         document.getElementById('mobileNumber').innerHTML =" *user must write digits only !";
    //         return false;
    //     }
    //     if(mobileNumber.length!=10){
    //         document.getElementById('mobileNumber').innerHTML =" *Mobile Number must be 10 digits only !";
    //         return false;
    //     }
    //     if(companyName == ""){
    //         document.getElementById('companyName').innerHTML =" * Company Name is Required !";
    //         return false;
    //     }
    //     if((companyName.length <= 2) || (companyName.length > 50)) {
    //         document.getElementById('companyName').innerHTML =" *Company Name lenght must be between 2 and 50 !";
    //         return false;	
    //     }
    //      if(!isNaN(companyName)){
    //         document.getElementById('companyName').innerHTML =" *only characters are allowed !";
    //         return false;
    //     }
        
    // }
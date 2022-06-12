$(document).ready(function (){


    // Validate Username
    $('#usercheck').hide();
    let usernameError = true;
    $('#name').keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $('#name').val();
        if (usernameValue.length == '') {
        $('#usercheck').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 30)) {
            $('#usercheck').show();
            $('#usercheck').html
    ("*length of username must be between 3 and 30 !");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
        }

        // Validate Email
        const email =
            document.getElementById('workEmail');
        email.addEventListener('blur', ()=>{
        let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if(regex.test(s)){
            email.classList.remove(
                    'is-invalid');
            emailError = true;
            }
            else{
                email.classList.add(
                    'is-invalid');
                emailError = false;
            }
        })



        // validate mobile number 

      // Validate Username
      $('#companycheck').hide();
      let companynameError = true;
      $('#company').keyup(function () {
        validatecompanyname();
      });

    function validatecompanyname() {
        let companynameValue = $('#company').val();
        if (companynameValue .length == '') {
        $('#companycheck').show();
            usernameError = false;
            return false;
        }
        else if((companynameValue .length < 3)||
                (companynameValue .length > 50)) {
            $('#companycheck').show();
            $('#companycheck').html
      ("*length of company Name must be between 3 and 50 !");
           companynameError = false;
            return false;
        }
        else {
            $('#companycheck').hide();
        }
        }


        $('#submitbtn').click(function () {
            validateUsername();
            validatecompanyname();
             validateEmail();
            if ((usernameError == true) &&
                (validatecompanyname == true) &&
                (emailError == true)) {
                return true;
            } else {
                return false;
            }
      
      
    });


});

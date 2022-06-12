// function validateName() {
//     var name =document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//          if (name == "") {
//           return false;
//             } else if (/\W/.test(name) === true) {
//             return false;
//             } else if (/\d/.test(name) === true) {
//             return false;
//             } else if (email == "") {
//             return false;
//             } else if (filter.test(email) === false) {
//             return false;
//               }
//             }

function validate() {
    alert("working");
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
}
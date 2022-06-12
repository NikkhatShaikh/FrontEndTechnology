$(document).on('click', '#submit', function () {
       //alert(" i am clicked");
       var webinarFormValid = webinarFormValidation();
       printAlert(webinarFormValid.serviceData);
      // callService(webinarnarFormValid.serviceData);
    
});


function webinarFormValidation() {
  var valid = true;
  var name = $('#name').val();
  var workEmail =$('#workEmail').val();
  var mobileNumber = $('#mobileNumber').val();
  var company = $('#company').val();

    
  var serviceData = {
    name:name,
    workEmail:workEmail,
    mobileNumber: mobileNumber,
    company:company
}
    return { isValid: true, serviceData: serviceData };

}


// function callService(serviceData) {
//   alert(" call service is running");
//   serviceData.source_type = "WEBINAR";
//   $.ajax({
//       url: "http://localhost:8080/check-loans-offers/api/v1/loans/offers/webinar",
//       method: "POST",
//       data: JSON.stringify(serviceData),
//       contentType: "application/json",
//       success: function (result) {
//           if (result.statusCode === 0) {
//               window.location.replace(window.location.origin + '/loan/check-loans-offers/thankyou.html');
//           } else {
//               alert(result.message);
//           }
//       }
//   });
// }


function printAlert(serviceData ){

    // alert (" i m running  in new function 123 ");      
    serviceData.sourceType = "WEBINAR";    
    $.ajax({
      url: "http://localhost:8080/check-loans-offers/api/v1/loans/offers/webinar",
      method: "POST",
      data: JSON.stringify(serviceData),
      contentType: "application/json",
      success: function (result) {
          if (result.statusCode === 0) {
               alert("Data is saved sucessfully!!!")
              window.location.replace(window.location.origin + '/loan/check-loans-offers/thankyou.html');
              //window.location.replace(window.location.origin + '/loan/webinar/thankyou.html');

          } else {
             alert(result.message);
            alert(" data is not  saved ")
          }
      }
    });
  

}  

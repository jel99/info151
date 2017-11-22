
//This function validates our Appointment form
function validate() {
  //Getting all the values the user input into the form
  var fname = document.forms["laptopApptForm"]["fname"].value;
  var lname = document.forms["laptopApptForm"]["lname"].value;
  var email = document.forms["laptopApptForm"]["email"].value;
  var phone = document.forms["laptopApptForm"]["phone"].value;
  var address = document.forms["laptopApptForm"]["address"].value;
  var city = document.forms["laptopApptForm"]["city"].value;
  var state = document.forms["laptopApptForm"]["state"].value;

  var month = document.forms["laptopApptForm"]["month"].value;
  var day = document.forms["laptopApptForm"]["day"].value;
  var time = document.forms["laptopApptForm"]["time"].value;

  var deviceHelp = document.forms["laptopApptForm"]["deviceHelp"].value;
  var heardFrom = document.forms["laptopApptForm"]["heardFrom"].value;

  if (document.getElementById("wantsUpdates").checked == true)
  {
    var wantsUpdates = "Yes";
  }
  else
  {
    var wantsUpdates = "No";
  }

  //Checking to see how many digits are in Phone string
  var iCount = 0;
  for (iIndex in phone) {
      if (!isNaN(parseInt(phone[iIndex]))) {
          iCount++;
      }
  }
  var phoneDigits = iCount;

  var phoneArray = phone.split("");

  var phoneNumCheck = true;
  var phoneCharAmt = 0;

  for (var i = 0; i < phone.length; i++) {
    if (isNaN(phoneArray[i])) {
      phoneNumCheck = false;
      phoneCharAmt++;
    }
  }

  //alert(phoneCharAmt);

  //Checking to see if Phone matches correct formatting and length
  var phoneCheck = false;

  if (phoneDigits == 10)
  {
    if (phone.substring(3,4) == "-" && phone.substring(7,8) == "-" && phoneCharAmt == 2)
      phoneCheck = true;
    else if (phone.indexOf("(") == 0 && phone.indexOf(")") == 4 && phoneCharAmt == 2)
      phoneCheck = true;
    else if (phone.substring(0,1) == "(" && phone.substring(4,5) == ")" && phone.substring(8,9) == "-" && phoneCharAmt == 3)
      phoneCheck = true;
    else if (phoneCharAmt == 0)
      phoneCheck = true;
    else
      phoneCheck = false;
  }
  else
    phoneCheck = false;

//Checking to see if Email matches correct formatting: name@url.domain
  var emailCheck = false;

  var emailAt = 0;
  for (var i = 0; i < email.length; i++) {
    if(email.substring(i,i+1) == "@")
    {
      emailAt++;
    }
  }

  //Check for @ and . not at beginning or end, and no more than 1 @
  if (email.substring(0,1) != "@" && email.substring(email.length-1,email.length) != "@" && email.substring(0,1) != "." && email.substring(email.length-1,email.length) != "." && emailAt == 1)
  {
    //Make sure email contains a @ and .
    if (email.indexOf("@") != -1 && email.indexOf(".") != -1)
    {
      //Make sure . is in 3rd from last or 4th from last position
      if (email.indexOf(".") == (email.length-4) || (email.indexOf(".") == (email.length-5)))
        emailCheck = true;
      else
        emailCheck = false;
    }
    else
      emailCheck = false;
  }
  else
    emailCheck = false;


  //Checking to see if any field is blank,
  //or if a drop-down that must have an option chosen is selected.

  if(fname == "" || lname == "" || email == "" || phone == "" || address == "" || state == "select" || phone == "")
    alert("Please fill in all required (*) fields completely.");
  else if (phoneCheck == false)
  {
    alert("Please fill in the phone field correctly.");
    document.forms["laptopApptForm"]["phone"].focus();
    if (emailCheck == false){
      alert("Please fill in the email field correctly.");
      document.forms["laptopApptForm"]["email"].focus();
    }
  }
  else if (emailCheck == false)
  {
    alert("Please fill in the email field correctly.");
    document.forms["laptopApptForm"]["email"].focus();
  }
  else
  {
    //Output the user's details for their review
    alert(
      "Confirm your details: \n\n" +
      "Name:  " + fname + " " + lname + "\n" +
      "Email:  " + email + "\n" +
      "Phone:  " + phone + "\n\n" +
      "Address:  " + address + ", " + city + ", " + state + "\n\n" +
      "Appointment Time:  " + month + " " + day + " at " + time + "\n\n" +
      "Type of device:  " + deviceHelp + "\n\n" +
      "How you heard about us:  " + heardFrom + "\n" +
      "Opt in to emails:  " + wantsUpdates
    );

    //Thank them for scheduling
    /*alert(
      "Thanks for scheduling an appointment! \n" +
      "Please click OK to go back to home page."
    );*/

    //Go back to home page
    //window.location.href = "home.html";
  }
}

function resetForm(){
  document.getElementById("laptopApptForm").reset();
}

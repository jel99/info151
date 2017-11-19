
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
  var phoneAmt = iCount;

  //Checking to see if Phone matches correct formatting and length
  var phoneCheck = false;
  if (phoneAmt == 10)
  {
    if (phone.substring(3) == "-" && phone.substring(7) == "-")
      phoneCheck = true;
    else if (phone.indexOf("(") == 0 && phone.indexOf(")") == 4)
      phoneCheck = true;
    else if (phone.substring(0) == "(" && phone.substring(4) == ")" && phone.substring(8) == "-")
      phoneCheck = true;
    else if (phoneAmt == 10)
      phoneCheck = true;
    else
      phoneCheck = false;
  }
  else
    phoneCheck = false;

  //Checking to see if Email matches correct formatting
  var emailCheck = false;

  if (email.substring(0) != "@" && email.substring(email.length) != "@")
  {
    if (email.indexOf("@") != -1 && email.indexOf(".") != -1)
    {
      if (email.indexOf(".") == email.length-4 || (email.indexOf(".") == email.length-5))
        emailCheck = true;
      else
        emailCheck = false;
    }
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
    if (emailCheck == false)
      alert("Please fill in the email field correctly.");
  }
  else if (emailCheck == false)
    alert("Please fill in the email field correctly.");
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
    alert(
      "Thanks for scheduling an appointment! \n" +
      "Please click OK to go back to home page."
    );

    //Go back to home page
    window.location.href = "home.html";
  }
}

function resetForm(){
  document.getElementById("laptopApptForm").reset();
}

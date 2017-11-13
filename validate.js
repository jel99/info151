
function validate()
{
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

  if (document.getElementById("wantsUpdates").checked == true)
  {
    var wantsUpdates = "Yes";
  }
  else
  {
    var wantsUpdates = "No";
  }

  if(fname == "" || lname == "" || email == "" || phone == "" || address == "" || state == "select" || phone == "")
  {
    alert("Please fill in all required (*) fields completely.");
  }
  else
  {
    alert(
      "Confirm your details: \n \n" +
      "Name:  " + fname + " " + lname + "\n" +
      "Email:  " + email + "\n" +
      "Phone:  " + phone + "\n" +
      "Address:  " + address + " " + city + " " + state + "\n" +
      "Appointment Time:  " + month + " " + day + " at " + time + "\n" +
      "Type of device:  " + deviceHelp + "\n" +
      "How you heard about us:  " + heardFrom + "\n" +
      "Opt in to emails:  " + wantsUpdates
    );

    var success = true;
  }

  if (var success)
  {
    alert(
      "Thanks for scheduling an appointment! \n" +
      "Please click OK to go back to home page."
    )
  }
}

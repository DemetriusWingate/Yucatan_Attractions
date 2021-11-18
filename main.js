    /* This function switches the nav menus */
    function myNav () {
        var x=document.getElementById("navLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  
  
  /*this function validates the form*/
  
  /*function myFunction () {
      var x=document.getElementById('name').value;
      if (x == "") {
      alert ("You didn't tell us your name!");
          return false;
       } else {
      alert ("Thanks, " + x + " for signing up for our newsletter!");
      }
      }*/



      /* Trip Generator*/
  function randomAttractionGenerator() {
    const attractions = [
      "Pink Lakes",
      "Cenotes",
      "Yellow City",
      "Merida",
      "Mayan Ruins"
    ];
  
    const random = attractions[Math.random() * attractions.length | 0]
    alert("This looks like the perfect match for you: " + random, attractions[random]);
  }

  /*Validation Email using RegEx*/

  function formValidate(){
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById("email").value;
    if (regExp.test(email)) 
        alert('Email Successful'); 
      else 
          alert('email not valid!');
  }

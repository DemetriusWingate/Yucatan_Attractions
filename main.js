    /* This function switches the nav menus */
    function myNav () {
        var x=document.getElementById("navLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

      /*Countdown Timer*/

      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //Auto update yearly so time never runs out
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "07/10/",
            summer = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > summer) {
          summer = dayMonth + nextYear;
        }
        
        //countdown 
        
        const countDown = new Date(summer).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "New Tours Are Here!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());
  

      /* Random Attraction Generator*/
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

  /*USD to MXN Converter*/

  const objectFromEntries = entries => [...entries]
  .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {})

const formToObject = form => objectFromEntries(new FormData(form).entries())

// rates & conversion equation as of 11-17-2021

const rates = {
  USD: 20.69,
  MXN: 1,
}

const convert = (amount, from, to) => rates[from] / rates[to] * amount

// pulling from the DOM here

const output = document.getElementById('output')

document
  .getElementById('converter')
  .addEventListener('submit', event => {
    event.preventDefault()
 
    const { amount, from, to } = formToObject(event.target)
    const result = convert(amount, from, to)
    
    output.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`
  })
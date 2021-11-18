    /* This function switches the nav menus */
    function myNav () {
        var x=document.getElementById("navLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  

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
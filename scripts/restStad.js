/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  document.querySelector(".contact-form").reset();

  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "skandinavisklokalvard@gmail.com",
    Password: "ursuhpdegjwkyxsf",
    To: "skandinavisklokalvard@gmail.com",
    From: "skandinavisklokalvard@gmail.com",
    Subject: `Offert till ${email}`,
    Body: `${name} ansökte om en offert för restaurangstädning och vill ha ett möte med er.  
    <br/> Meddelande: ${message} 
    <br/> Email: ${email}`,
  }).then((message) => alert("Mail sent"));
}

window.onload = function () {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_2vbhiyf", "template_zfe20mj", this).then(
      function (response) {
        console.log("SUCCESS!", response);
        // Hide the form, but keep the success message visible
        contactForm.style.display = "none";
        // Show the success message
        successMessage.classList.remove("hidden");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};

//'service_2vbhiyf', 'template_zfe20mj'

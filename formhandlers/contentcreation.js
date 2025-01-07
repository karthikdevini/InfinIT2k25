document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contentcreationForm");
  const successMessage = document.getElementById("contentcreationSuccessMessage");
  const registrationFee = document.getElementById("registrationFee");



  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScptd8i-6DW360OEU9Bl7l3JPtjscROcvGndc-FYOqJkl3L8w/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        successMessage.style.display = "block";
        form.reset();
        registrationFee.value = `₹${feePerParticipant}`;
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

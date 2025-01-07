document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("codeclashForm");
  const successMessage = document.getElementById("codeclashSuccessMessage");
  const registrationFee = document.getElementById("registrationFee");


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfDpuFzgC5DYolH0CI16J4prQfiBHWjgDMW9rYKik0eFkVmmQ/formResponse";

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

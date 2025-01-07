document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("artexhibitionForm");
  const successMessage = document.getElementById("artexhibitionSuccessMessage");
  const registrationFee = document.getElementById("registrationFee");



  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSd8tEJJehkxFdRHmPhrdc8oJpEUGXucNrXrmR81jyId-6zq1w/formResponse";

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

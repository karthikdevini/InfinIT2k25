document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("techxpoForm");
  const successMessage = document.getElementById("techxpoSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSf1Pr6F5MvXSSFQ3gpI1oRxzqg9mTk9pBiU9kc7mH4jKpSqJg/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        successMessage.style.display = "block";
        form.reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

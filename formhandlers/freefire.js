document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("freefireForm");
  const successMessage = document.getElementById("freefireSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfFvHjI2Iv3LckcaH3l0I2-Xq-ga3jN8-n0z9CBMScTZYGLaA/formResponse";

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

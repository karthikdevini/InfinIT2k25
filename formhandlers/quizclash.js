document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizclashForm");
  const successMessage = document.getElementById("quizclashSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSdQ3FpS404lywkmsKWoCtjzbg-qLwdgDilL03ZT0nRsMBda7A/formResponse";

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

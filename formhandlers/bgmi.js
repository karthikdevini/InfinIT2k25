document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bgmiForm");
  const successMessage = document.getElementById("bgmiSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScb4HmPb8LtOlFaLja7bNPFk4G9oonNaWTKzC_Vw20Jp4Bz_g/formResponse";

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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("treasurehuntForm");
  const successMessage = document.getElementById("treasurehuntSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSe5w3j3skv0c54lmq0ertgoeO-aGqMQIZqPa_ZwBDdk5fBxDQ/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        successMessage.style.display = "block";
        form.reset();
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

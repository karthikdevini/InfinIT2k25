document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("PaperPresentationForm");
  const successMessage = document.getElementById("PaperPresentationSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSf8CYLlDBEbNxpXyEAfavay1CoPmkdpze9y7IzdL4E1ZKVlCg/formResponse";

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

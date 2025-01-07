document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("codeathonForm");
  const successMessage = document.getElementById("codeathonSuccessMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSdIPKOzIHiV2V0r9-5RB3Hi-JvIAGKBi5JyeBU_9tGKj3qLHg/formResponse";

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
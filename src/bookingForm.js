document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eventForm");
  const confirmation = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    let valid = true;

    function toggleError(errorId, condition) {
      const errorElem = document.getElementById(errorId);
      if (condition) {
        errorElem.classList.add("hidden");
      } else {
        errorElem.classList.remove("hidden");
        valid = false;
      }
    }

    toggleError("nameError", name.value.trim() !== "");
    toggleError("emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));

    if (valid) {
      form.reset();
      confirmation.classList.remove("hidden");

      setTimeout(() => {
        confirmation.classList.add("hidden");
      }, 4000);
    }
  });
});

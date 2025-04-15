document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("eventForm");
    const confirmation = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Form Fields
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const contact = document.getElementById("contact");
      const eventLocation = document.getElementById("event-location"); // ✅ fixed ID and variable
      const type = document.getElementById("event-type");
      const attendees = document.getElementById("attendees");
      const desc = document.getElementById("description");
  
      // Validation
      let isValid = true;
  
      const showError = (field, messageId, condition) => {
        document.getElementById(messageId).classList.toggle("hidden", condition);
        if (!condition) isValid = false;
      };
  
      showError(name, "nameError", name.value.trim() !== "");
      showError(email, "emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
      showError(contact, "contactError", /^[0-9]{10}$/.test(contact.value));
      showError(eventLocation, "locationError", eventLocation.value.trim() !== ""); // ✅ fixed
      showError(type, "typeError", type.value.trim() !== "");
      showError(attendees, "attendeesError", attendees.value.trim() !== "");
      showError(desc, "descError", desc.value.trim() !== "");
  
      if (isValid) {
        form.reset();
        confirmation.classList.remove("hidden");
        setTimeout(() => {
          confirmation.classList.add("hidden");
        }, 4000);
      }
    });
  });
  
  
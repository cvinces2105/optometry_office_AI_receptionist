// ClearPath Vision & Optometry - Interactive UI & Chat Helpers
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Confirm Dialogflow Messenger widget initialization
  window.addEventListener("df-messenger-loaded", () => {
    console.log("ClearPath Receptionist chat widget loaded.");
  });
});

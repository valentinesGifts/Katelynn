document.addEventListener("DOMContentLoaded", function () {
  const flowersButton = document.getElementById("flowers-btn");

  flowersButton.addEventListener("click", function (event) {
    event.preventDefault();

    location.href = "flowers/flowers.html";
    console.log("Clicked");
  });
});

document
  .getElementById("loverletter-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    event.stopPropagation(); // Stop the event from bubbling up to the document

    const envelope = document.getElementById("envelope");
    envelope.classList.add("fly-in"); // Fly the envelope in
  });

document.getElementById("envelope").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent clicks inside the envelope from bubbling up
  this.classList.toggle("open"); // Toggle the open state of the letter
});

// Hide the envelope when clicking outside of it
document.addEventListener("click", function (event) {
  const envelope = document.getElementById("envelope");
  const isClickInsideEnvelope = envelope.contains(event.target);

  // Hide the envelope only if it's visible and the click is outside
  if (!isClickInsideEnvelope && envelope.classList.contains("fly-in")) {
    envelope.classList.remove("fly-in", "open"); // Hide the envelope
  }
});

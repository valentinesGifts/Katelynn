let currentAlbum = [];
let currentIndex = 0;

function openAlbum(album) {
  console.log("openAlbum called with:", album);

  // Define album images correctly
  if (album === "colouring") {
    currentAlbum = ["images/colouring1.jpg", "images/colouring2.jpg"];
  } else {
    console.error("Album not found:", album);
    return; // Exit function if album is not recognized
  }

  currentIndex = 0;

  // Ensure the first image is valid before setting src
  if (currentAlbum.length > 0) {
    document.getElementById("modalImage").src = currentAlbum[currentIndex];
    console.log("Image set to:", document.getElementById("modalImage").src);
  } else {
    console.error("No images found for album:", album);
  }

  // Show modal
  document.getElementById("galleryModal").style.display = "flex";
}

function changeImage(step) {
  if (currentAlbum.length === 0) {
    console.error("No images in album.");
    return;
  }

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = currentAlbum.length - 1;
  } else if (currentIndex >= currentAlbum.length) {
    currentIndex = 0;
  }

  document.getElementById("modalImage").src = currentAlbum[currentIndex];
  console.log("Changed image to:", document.getElementById("modalImage").src);
}

function closeAlbum() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.style.display = "none";
  } else {
    console.error("Modal not found!");
  }
}

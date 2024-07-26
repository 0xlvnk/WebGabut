function changePage(pageId) {
  // Get all sections
  const sections = document.querySelectorAll("section");

  // Hide all sections
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  const selectedSection = document.getElementById(pageId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  } else {
    console.error(`Section with id "${pageId}" not found.`);
  }
}

// Initial page
changePage("home");
let textElement = document.getElementById("typewriter-text");
let text = textElement.textContent;
let charIndex = 0;
let intervalId;

textElement.textContent = "";

intervalId = setInterval(() => {
    if (charIndex < text.length) {
        textElement.textContent += text[charIndex];
        charIndex++;
    } else {
        clearInterval(intervalId);
    }
}, 100);

document.querySelector("#title").addEventListener("click", e => {
   const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
   document.querySelector(".container").style.color = color; 
});

const header = document.querySelector('.top-header');
const main = document.querySelector('.main-info');

// Set an initial margin for the main element
main.style.marginTop = `150px`;

// Add a listener to the header element that updates the margin of the main element when the header's height changes
window.addEventListener('resize', () => {
  main.style.marginTop = `${header.offsetHeight + 50}px`;
});
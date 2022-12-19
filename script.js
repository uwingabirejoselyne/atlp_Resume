document.querySelector("#title").addEventListener("click", e => {
   const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
   document.querySelector(".container").style.color = color; 
});
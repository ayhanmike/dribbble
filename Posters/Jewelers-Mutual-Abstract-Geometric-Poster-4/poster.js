
const grids = document.querySelectorAll(".grid-item");

grids.forEach(item => {
  item.addEventListener("mouseenter", (e) => {
    let elem = e.target;
    if (!elem.classList.contains("grid-item")) {
      elem = elem.closest(".grid-item");
    }
    if (elem.classList.contains("flip")) {
      elem.classList.remove("flip");
      setTimeout(() => {
        elem.querySelector(".grid-inner > div:last-child").remove();  
      }, 300);      
    } else {
      let grid = grids[Math.round(Math.random() * (grids.length - 1))].querySelector(".grid-inner > div").cloneNode(true);
  
      if (!(elem.querySelectorAll(".grid-inner > div").length > 1)) {
        elem.querySelector(".grid-inner").appendChild(grid);
      }
      elem.classList.add("flip");
    }    
  });
});
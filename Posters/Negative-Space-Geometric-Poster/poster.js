
const grid = document.querySelectorAll(".grid-item");
const colors = ["grey", "yellow", "orange", "red", "green", "white"];
const directions = ["top left", "top right", "bottom left", "bottom right"];

grid.forEach(item => {
  item.addEventListener("mouseover", (e) => {
    let elem = e.target;
    let random_color = Math.floor(Math.random() * colors.length);
    let color = colors[random_color];

    let random_direction = Math.floor(Math.random() * directions.length);
    let direction = directions[random_direction];

    let new_class = "grid-item " + color + " " + direction;
    new_class = new_class.split(" ");

    elem.classList.remove(...elem.classList);
    elem.classList.add(...new_class);
  });
});


// grid.forEach(elem => {
//   setInterval(function () {
//     let random_color = Math.floor(Math.random() * colors.length);
//     let color = colors[random_color];

//     let random_direction = Math.floor(Math.random() * directions.length);
//     let direction = directions[random_direction];

//     let new_class = "grid-item " + color + " " + direction;
//     new_class = new_class.split(" ");

//     elem.classList.remove(...elem.classList);
//     elem.classList.add(...new_class);
//   }, 300);
// });
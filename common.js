const frame = document.querySelector(".frame");
const poster = document.querySelector(".poster");

//Moving Animation Event
poster.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 255;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 255;
  frame.style.transform = `perspective(calc(60vh * 0.6)) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

const HEADER = `<header><a href="/" title="Back to Home" class="back-to-home">Home</a></header>`;
document.body.insertAdjacentHTML("beforeend", HEADER);
111;

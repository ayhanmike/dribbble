const grids = document.querySelectorAll(".grid-item");

const party = function (span, isHorizontal) {
  let interval = (Math.floor(Math.random() * 5) + 5) * 100;
  let spanIndex = [...span.parentElement.children].indexOf(span);
  let gridIndex = [...span.closest(".frame-grid").children].indexOf(
    span.closest(".grid-item")
  );
  intervals.push({
    grid: gridIndex,
    span: spanIndex,
    func: setInterval(function () {
      let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      let random_size = (Math.floor(Math.random() * 3) + 1) * 25;
      random_size = random_size * plusOrMinus;
      let wrapper = span.closest("div");
      let width =
        parseInt((span.offsetWidth / wrapper.offsetWidth) * 100) + random_size;
      let height =
        parseInt((span.offsetHeight / wrapper.offsetHeight) * 100) +
        random_size;

      width = width > 100 ? 100 : width;
      width = width < 0 ? 0 : width;
      height = height > 100 ? 100 : height;
      height = height < 0 ? 0 : height;
      if (isHorizontal) {
        span.style.width = width + "%";
      } else {
        span.style.height = height + "%";
      }
    }, interval),
  });
};
const partyHandler = function (e) {
  let elem = e.target || e;
  if (!elem.classList.contains("grid-item")) {
    elem = elem.closest(".grid-item");
  }
  if (elem.classList.contains("clicked")) {
    let gridIndex = [...elem.closest(".frame-grid").children].indexOf(elem);
    intervals
      .filter((x) => x.grid == gridIndex)
      .forEach((interval) => {
        clearInterval(interval.func);
      });
    elem.classList.remove("clicked");
  } else {
    elem.classList.add("clicked");
    let isHorizontal = elem
      .querySelector(".grid-inner > div")
      .classList.contains("horizontal");
    let spans = elem.querySelectorAll("span");
    spans.forEach((span) => {
      party(span, isHorizontal);
    });
  }
};

const checkClicked = function () {
  if (document.querySelectorAll(".grid-item.clicked").length > 0) {
    document.querySelector(".frame-grid").classList.add("clicked");
  } else {
    document.querySelector(".frame-grid").classList.remove("clicked");
  }
};

let intervals = [];
grids.forEach((item) => {
  item.addEventListener("click", (e) => {
    partyHandler(item);
    checkClicked();
  });
});

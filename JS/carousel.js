const carousel = document.querySelector(".carousel");

let isDragStart = false;

const dragStart = () => {
  isDragStart = true;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();

  carousel.scrollLeft = e.pageX;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);





/* const carousel = document.querySelector(".carousel");

let isDragStart = false;
let dragStartX = 0;
let scrollLeft = 0;

const dragStart = (e) => {
  isDragStart = true;
  dragStartX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - dragStartX) * 3;
  carousel.scrollLeft = scrollLeft - walk;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);

document.addEventListener("mouseup", () => {
  isDragStart = false;
});
 */
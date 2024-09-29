const item1 = document.querySelector("main .wrapper .item1");
const item2 = document.querySelector("main .wrapper .item2");
const item3 = document.querySelector("main .wrapper .item3");
const item4 = document.querySelector("main .wrapper .item4");
const item5 = document.querySelector("main .wrapper .item5");
const item6 = document.querySelector("main .wrapper .item6");
const allItems = document.querySelectorAll("main .wrapper .item");
const wrapper = document.querySelector("main");

item1.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(./imgs/home/Frame1.webp)";
});
item2.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(./imgs/home/Frame2.webp)";
});
item3.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(./imgs/home/Frame3.webp)";
});
item4.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(./imgs/home/Frame4.webp)";
});
item5.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(./imgs/home/Frame5.webp)";
});
item6.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(./imgs/home/Frame6.webp)";
});

Array.from(allItems).map((item) => {
  item.addEventListener("mouseleave", () => {
    wrapper.style.backgroundImage = "url(./imgs/home/mainframe.gif)";
  });
});

const links = document.querySelectorAll(".nav-bar ul a");
for (const e of links) e.addEventListener("click", clickHandler);
function clickHandler(e) {
  e.preventDefault();
  const t = this.getAttribute("href"),
    o = document.querySelector(t).offsetTop;
  scroll({ top: o, behavior: "smooth" });
}

const one = document.getElementById("one");
let scrollPrev = window.scrollY;
// console.log(scrollPrev);
// console.log(scrollPrev);
window.addEventListener("scroll", () => {
  if (scrollPrev < 120) {
    // then navbar will show
    one.style.top = "0";
  } else {
    // otherwise hide
    one.style.top = "-400px";
  }

  //   update scrollPrev Value,is it down or top.if down  one.style.top = "-400px"; if top one.style.top = "0";
  scrollPrev = window.scrollY;
});

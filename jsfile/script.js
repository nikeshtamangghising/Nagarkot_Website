/*Menu Button*/
const toggleBtn = document.querySelector("#menuBtn");
const toggleBtnIcon = document.querySelector("#menuBtn i");
const dropDownMenu = document.querySelector("#dropDownMenu");
let vidbtn = document.querySelectorAll(".vid-btn");
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
vidbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
testimonal -
  btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector("#testimonalcontrols .active")
        .classList.remove("active");
      btn.classList.add("active");
      let src = btn.getAttribute("data-src");
      document.querySelector("#video-slider").src = src;
    });
  });

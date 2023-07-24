const panels = document.querySelectorAll(".panel");

const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", function (e) {
    removeActive();
    panel.classList.add("active");
  });
});

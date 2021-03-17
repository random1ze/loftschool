(function () {
  const openingButton = document.querySelector(".sidebar__hamburger");
  const closingButton = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector(".sidebar");

  function openSidebar() {
    sidebar.classList.add("sidebar--opened");
  }
  function closeSidebar() {
    sidebar.classList.remove("sidebar--opened");
  }

  openingButton.addEventListener("click", openSidebar);
  closingButton.addEventListener("click", closeSidebar);
})();

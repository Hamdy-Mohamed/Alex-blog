let home = document.querySelector(".reload"),
  logo = document.querySelector(".logo");

logo.addEventListener("mousemove", function () {
  logo.style.cursor = "wait";
  logo.onclick = function () {
    window.location.reload();
  };
});

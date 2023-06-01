let btn = document.querySelector("button");
let pass = document.querySelector("#pass");
let userName = document.querySelector("#userName");

btn.addEventListener("click", function () {
  let password = pass.value;
  let user = userName.value;
  let inputs = password && user;

  if (inputs.length >= 10) {
    window.open(".../../index.html");
  } else {
    window.location.reload();
  }
});

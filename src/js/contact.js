let inputColor = document.querySelector("input");
inputColor.addEventListener("change", function () {
  change_color = inputColor.value;
  document.body.style.background = change_color;
});
let centerLogo = document.querySelector(".center_logo");
centerLogo.onclick = () => {
  let logoSrc = (centerLogo.src = "../img/contact.png");
  if ((logoSrc = "../img/contact.png")) {
    centerLogo.style.pointerEvents = "none";
  }
};

// icons

let facebook = document.querySelector("#facebook"),
  telegram = document.querySelector("#telegram"),
  twitter = document.querySelector("#twitter"),
  whatsapp = document.querySelector("#whatsapp"),
  linkedin = document.querySelector("#linkedin");
facebook.onclick = () => {
  window.open("https://www.facebook.com/hamdy.elgokar.5");
};
telegram.onclick = () => {
  window.open("https://t.me/Askander")

};
twitter.onclick = () => {
  window.open("https://twitter.com/HamdyMohamedd1")
};
whatsapp.onclick = () => {
  window.open("https://wa.me/20127889768");
};
linkedin.onclick = () => {
  window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/");
};

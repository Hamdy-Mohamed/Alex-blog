let pic = document.querySelector(".title_img");

pic.addEventListener("click", function () {
  let picArr = [
    "../img/history/AlexLibrary.jpeg",
    "../img/history/Alexandria Egypt.jpeg",
    "../img/history/Caro_car.jpeg",
    "../img/history/San_summer.jpeg",
    "../img/history/37705b10-1503-4a53-be06-e1cdafb4fe82.jpeg",
    "../img/history/cayetbay.jpeg",
    "../img/history/sea_View.jpeg",
    "../img/history/San_winter.jpeg",
  ];
  let randomImg = Math.floor(Math.random() * picArr.length);
  let randomURL = picArr[randomImg];
  pic.src = randomURL;
});

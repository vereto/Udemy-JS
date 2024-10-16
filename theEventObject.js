// document.querySelector("button").addEventListener("click", function (evt) {
//   console.log(evt);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup', function () {
//     console.log('KEYUP');
// })

// window.addEventListener("keydown", function (e) {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("UP!");
//       break;
//     case "ArrowDown":
//       console.log("DOWN!");
//       break;
//     case "ArrowLeft":
//       console.log("LEFT!");
//       break;
//     case "ArrowRight":
//       console.log("RIGHT");
//       break;
//     default:
//       console.log("IGNORE!");
//   }
// });

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const catName = input.value;
  const newLI = document.createElement("LI")
  newLI.innerText = catName;
  list.append(newLI);
  input.value = '';
});

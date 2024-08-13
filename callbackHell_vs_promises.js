// setTimeout(() => {
//   document.body.style.backgroundColor = "gray";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "silver";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "lightyellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "lightgreen";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "lightblue";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "pink";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000, () => {
//         delayedColorChange("blue", 1000, () => {});
//       });
//     });
//   });
// });

//rewrite same Function using Promises

const delayedColorChange = (color, delay) =>{
  return new Promise ((resolve,reject) => {
    setTimeout(()=> {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

delayedColorChange('red',1000)
.then(()=>delayedColorChange('orange', 1000))
.then(()=> delayedColorChange('yellow',1000))
.then(()=>delayedColorChange('green',1000))
.then(()=>delayedColorChange('blue',1000))
.then(()=>delayedColorChange('purple',1000))
    

// searchMovieAPI("amadeus", () => {
//     saveToMyDB(movies,() => {
//         //if it works,run this code
//       },
//       () => {
//         //if it doesn't work,run this code
//       });
//   }, () => {
//     //if API is down,or request fails
//   });

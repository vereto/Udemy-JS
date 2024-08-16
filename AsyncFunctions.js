const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "dayandnight") {
    return "WELCOME";
  }
  throw "Invalid Password";
};

login("hdtdtghd")
  .then((msg) => {
    console.log("USER LOGGED IN");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

  
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("purple", 1000));

async function rainbow() {
  await delayedColorChange('red',1000);
  await delayedColorChange('orange',1000);
  await delayedColorChange('yellow',1000);
  await delayedColorChange('green',1000);
  await delayedColorChange('blue',1000);
  await delayedColorChange('indigo',1000);
  return 'All done'
}
rainbow().then(()=> console.log('thats is now end of the rainbow!'))
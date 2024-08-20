const form = document.querySelector("#SearchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = {params: {q: searchTerm}}
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  deleteExistingImg()
  makeImg(res.data)
  form.elements.query.value = ''
  
});

const makeImg = (shows) => {

  for (let result of shows) {
   
    if (result.show.image) {
    const img = document.createElement("IMG");
    img.src = result.show.image.medium;
    document.body.append(img);
}
  }
};

const deleteExistingImg = () => {
const images = document.querySelectorAll('img')
images.forEach(img => img.remove());
}

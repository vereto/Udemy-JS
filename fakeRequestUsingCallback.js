const fakeRequestCallBack = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("IT DIDN'T WORK THIS TIME :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your NEW data from ${url}`);
      }
    }, delay);
  });
};


// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then(()=> {
//     console.log('THAT IS A SUCCESS!!(page 1)');
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//     .then(() => {
//         console.log('promised resolved!(page 2)');
//         fakeRequestPromise('yelp.com/api/page3')
//         .then(() => {
//             console.log('still works - page 3');
//         })
//         .catch(() => {
//             console.log('Nope.. Error at 3rd attempt');
//         })
//     })
//     .catch(() => {
//         console.log('promised rejected at (page 2)');  
//     })
// })
// .catch(()=>{
//     console.log('No,No...This time is rejected (page 1)');
    
// })

  fakeRequestPromise('yelp.com/api/coffee/page1')
  .then((data) => {
    console.log('THAT IS A SUCCESS!!(page 1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page2')  
  })
  .then((data)=>{
    console.log('promised resolved!(page 2)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/page2')
  })
  .then((data)=> {
    console.log('still works - page 3');
    console.log(data); 
  })
  .catch((err) =>{
    console.log('No,No...This time is rejected');
    console.log(err);
    
  })


// fakeRequestCallBack("books.com/page1",
//   function (response) {
//     console.log("it works!!!");
//     console.log(response);
//     fakeRequestCallBack("books.com/page2",
//       function (response) {
//         console.log("it does work!!!");
//         console.log('page 2',response);
//         fakeRequestCallBack('books.com/page3',
//             function (response) {
//                 console.log('third and last time lucky');
//                 console.log(response);
//             },
//             function (err) {
//                 console.log('better luck next time',err);    
//             })
//       },
//       function (err) {
//         console.log('error.......(2nd request).........',err);
//     })
//   },function (err) {
//     console.log("ERROR!!!", err);
//   });

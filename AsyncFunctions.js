 const login = async(username, password)=>{
    if(!username || !password) throw 'Missing Credentials'
    if (password === 'dayandnight'){ return'WELCOME'}
      throw ("Invalid Password");
    }

    login('hdtdtghd')
    .then(msg => {
      console.log('USER LOGGED IN');
      console.log(msg);
    })
    .catch(err => {
      console.log('ERROR');
      console.log(err);
    })
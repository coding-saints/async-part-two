// server.js

function square(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.pow(x, 2));
      }, 2000);
    });
  }
  
  square(10).then(data => {
    console.log(data);
  });

  //async

  async function square(x) {
    const time = await setTimeout(500)
    const solve = Math.pow(x,2)
  }
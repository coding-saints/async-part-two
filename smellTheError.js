// Async/await makes it finally possible to handle both synchronous and asynchronous errors with the same construct, good old try/catch.

/*     try/catch example with Asynnc instead of Promises     */


const makeRequest = async () => {
    try {
      // this parse may fail
      const data = JSON.parse(await getJSON())
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  /*  ----------------------------------------    */


// Let's assume a scenario where you have promises-based logic and non-promises-based logic ( synchronous and asynchronous ) in your code. You would probably handle errors this way:

/*  PROMISE ERROR-HANDLING */

const someComplicatedOperation = () => {
  try {
    // Blablabla do something
    db.getUsers()     //promise
    .then( users => {
      const data = JSON.parse( users )    // ===> What if this fail bro?
      console.log(data)
    })
    .catch( err => {
      console.log('You broke your promise!!!')
    })
  }
  catch( err ){
    console.log('I caught a error. But I only catch synchronous stuff here :(')
  }
}

// That's right. The try/catch won't catch the JSON.parse error because it is happening inside a promise. A rejected promise triggers the .catch() method, but NOT the other catch. That's annoying, we have to duplicate code for catching errors. Well, that time is now over with async/await!

/*  ASYNC ERROR-HANDLING */
const allErrorsAreDeclaredEqualInTheEyesOfAsyncAwait = async () => {
    try {
      const users = await db.getUsers
      const data = JSON.parse( users )
      console.log(data)
    }
    catch( err ){
      console.log('All errors are welcomed here! From promises or not, this catch is your catch.')
    }
  }

/*  PROMISE uses thenables (.then()) for stacking  */

  const stackingAllTheWayToTheSky = () => {
    return usefulPromise()
      .then(() => usefulPromise())
      .then(() => usefulPromise())
      .then(() => usefulPromise())
      .then(() => usefulPromise())
      .then(() => usefulPromise())
      .then(() => {
        throw new Error('I can see my house from here!!')
      })
  }
  
  stackingAllTheWayToTheSky()
    .then(() => {
      console.log("You won't reach me.")
    })
    .catch(err => {
      console.log(err) // FEEL THE PAIN!
    })
  
    //Error: I can see my house from here!!
    //  at stackingAllTheWayToTheSky.then.
//----------------------------------------------------------
/*  ASYNC just looks cleaner...    */
const debuggingMadeFun = async () => {
    await usefulPromise()
    await usefulPromise()
    await usefulPromise()
    await usefulPromise()
    await usefulPromise()
    throw new Error('I will not stack.')
  }
  
  debuggingMadeFun()
    .then(() => {
      console.log('Not here')
    })
    .catch(err => {
      console.log(err)
    })
    //Error: I will not stack
    // at debuggingMadeFun (index.js:47:9)
  


// Conditionals
// Imagine something like the code below which fetches some data and decides whether it should return that or get more details based on some value in the data.

const makeRequest = () => {
    return getJSON()
      .then(data => {
        if (data.needsAnotherRequest) {
          return makeAnotherRequest(data)
            .then(moreData => {
              console.log(moreData)
              return moreData
            })
        } else {
          console.log(data)
          return data
        }
      })
  }

  //remind you of something? ...callback hell

//   now using async


const makeRequest = async () => {
    const data = await getJSON()
    if (data.needsAnotherRequest) {
      const moreData = await makeAnotherRequest(data);
      console.log(moreData)
      return moreData
    } else {
      console.log(data)
      return data    
    }
  }
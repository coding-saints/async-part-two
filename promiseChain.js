// Values in the middle
// You probably wrote some code where you executed one operation and used that to execute a second one. Finally, you need those two values for the third and final operation. So, you may write something like that:

const withPromises = () => {
    return firstPromise()
      .then( firstValue => {
        return secondPromise( firstValue )
      })
      .then( secondValue => {
        return thirdPromise( firstValue, secondValue )
      })
  }
  // Or using Promise.all. It's a bit ugly, but the job is done
  
  const withPromiseAll = () => {
    return firstPromise() 
      .then(firstValue => {
        return Promise.all([ firstValue, secondPromise(firstValue) ])
      })
      .then(([firstValue, secondValue]) => {
        return thirdPromise(firstValue, secondValue)
      })
  }
  Let's look at how much better it is with async/await:
  
  const withAsyncAwait = async () => {
    const firstValue = await firstPromise()
    const secondValue = await secondPromise()
    return thirdPromise( firstValue, secondValue )
  }
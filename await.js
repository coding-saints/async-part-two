// You can await anything
// Last but not least, await can be used for both synchronous and asynchronous expressions. For example, you can write await 5, which is equivalent to Promise.resolve(5). This might not seem very useful at first, but it's actually a great advantage when writing a library or a utility function where you don't know whether the input will be sync or async.

Imagine you want to record the time taken to execute some API calls in your application, and you decide to create a generic function for this purpose. Here's how it would look with promises
const recordTime = (makeRequest) => {
  const timeStart = Date.now();
  makeRequest().then(() => { // throws error for sync functions (.then is not a function)
    const timeEnd = Date.now();
    console.log('time take:', timeEnd - timeStart);
  })
}
view rawrecord-time-promise.js hosted with ❤ by GitHub
You know that all API calls are going to return promises, but what happens if you use the same function to record the time taken in a synchronous function? It will throw an error because the sync function does not return a promise. The usual way to avoid this is wrapping makeRequest() in Promise.resolve()

If you use async/await, you won't have to worry about these cases because await allows you to work safely with any value, promise or not.
const recordTime = async (makeRequest) => {
  const timeStart = Date.now();
  await makeRequest(); // works for any sync or async function
  const timeEnd = Date.now();
  console.log('time take:', timeEnd - timeStart);
}
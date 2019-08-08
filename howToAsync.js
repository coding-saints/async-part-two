// Async/await is actually just syntax sugar built on top of promises. It cannot be used with plain callbacks or node callbacks.
// Async/await is, like promises, non-blocking.
// Async/await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.

// Our function has the keyword async before it. The await keyword can only be used inside functions defined with async. Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function (which is the string "done" in our case).

const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";

//async/await
const fetchTitle = async () => {
   let showError = "Error oh noes"
    
    try {
        const res = await fetch(url)
        let blob = await res.json()
        return lob.title;
    } catch (e) {
        showError(e)
    }


}


fetchTitle().then(title => {
    console.log(JSON.stringify(title, null, "\t"));
    
    })



//Understanding a promise
// const myPromise = Promise.resolve(5).then(value => value * 2).then(value => value - 1)

// myPromise.then(finalVal => {
//     console.log(finalVal);
// })

// using fetch to retunr Promise
// const getData = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData(url);

// using promise
/*
const fetchTitle = () => {
    return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.title))
    }
*/





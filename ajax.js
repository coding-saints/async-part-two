const fetch = require('node-fetch')

async function ajaxCall(x) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const blob = await res.json()
    console.log(blob.title);
}

ajaxCall(10)
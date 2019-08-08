// map some URLs to json-promises
const jsonPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.json();
  });
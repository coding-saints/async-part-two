// Although you're writing code that looks synchronous, ensure you don't miss the opportunity to do things in parallel.

async function series() {
  await wait(500); // Wait 500ms…
  await wait(500); // …then wait another 500ms.
  return "done!";
}

// The above takes 1000ms to complete, whereas:

async function parallel() {
    const wait1 = wait(500); // Start a 500ms timer asynchronously…
    const wait2 = wait(500); // …meaning this timer happens in parallel.
    await wait1; // Wait 500ms for the first timer…
    await wait2; // …by which time this timer has already finished.
    return "done!";
  }

//   …the above takes 500ms to complete, because both waits happen at the same time.
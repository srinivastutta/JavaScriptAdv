let myPromise = new Promise((resolve, reject) => {
  let connection = true;
  if (connection) {
    resolve("Connection Established Successfully"); // If condition satisfied then it will give you "Success" message
  } else {
    reject("Connection was Failed"); // If condition unsatisfied then it will give you "Failed" message
  }
});

myPromise
  .then((message) => {
    console.log("This is from then() " + message);
  })
  .catch((message) => {
    console.log("This is from catch() " + message);
  });

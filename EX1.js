function exam1(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === "number") {
      resolve(number);
    } else if (typeof number === "string") {
      reject("inserted input is not a number");
    }
  })
    .then((number) => {
      if (number % 2 === 0) {
        setTimeout(() => {
          console.log("even");
        }, 2000);
      } else {
        setTimeout(() => {
          console.log("odd");
        }, 1000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
exam1(11);
////////////////////////////////////////////////////////////////////////
async function exam2() {
  let myPromise = await new Promise((resolve, reject) =>
    setTimeout(() => resolve("i love you"), 3000)
  );
  console.log(myPromise);
}
exam2();
////////////////////////////////////////////////////////////////////////

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
    //reject(new Error("err..."));
  }, 3000);
});

// pr.then((result) => {
//   console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("exit");
//   });

//new promise는
//초기 state : pending(대기), result : kundefined
//resolve(value)발생시
//sate : fulfilled(이행됨) , result : value
//reject(error)발생시
//state : rejected(거부됨) , result : error

//async await
async function getName(name) {
  return name;
}
// console.log(getName()); // 항상 promise를 return
// getName().then((name) => {
//   console.log(name);
// });

function getName2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName2("Mike");
  console.log(result);
}

showName();

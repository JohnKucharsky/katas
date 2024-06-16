const mixedPromisesArray = [
  Promise.resolve(33),
  Promise.reject(44),
];
const p = Promise.all(mixedPromisesArray);
console.log(p.catch(console.error));
console.log("hit");
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

console.log("hit bottom");

// Promise { <pending> }
// hit
// hit bottom
// 44
// the queue is now empty
// Promise { <rejected> 44 }

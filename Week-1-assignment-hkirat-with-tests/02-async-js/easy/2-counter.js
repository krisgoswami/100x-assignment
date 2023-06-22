// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// function counter(n) {
//   console.log(n);

//   // n is number of seconds
//   for (i = 0; i < n; i++) {
//     setTimeout(() => {
//       counter(n + 1);
//     }, 1000);
//   }
// }

// counter(10);
// // console.log(timer());
// // (Hint: setTimeout)

function countDown(counter) {
    console.log(counter);
  
    if (counter > 0) {
      setTimeout(() => {
        countDown(counter - 1);
      }, 1000);
    }
  }
  
  // Start the counter from 10
  countDown(10);
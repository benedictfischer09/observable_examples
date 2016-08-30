/*
 * This is how you might get a stream of integers without observables
 */

function interval(period, callback) {
  let num = 0;
  setInterval(() => {
    callback(num);
    num = num + 1;
  }, period)
}

interval(1000, console.log)

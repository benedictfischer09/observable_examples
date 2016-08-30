import Rx from 'rxjs';

const integers$ = Rx.Observable.
  interval(1000).
  do(() => {
    console.log('still going')
  });
/*
 * Although the observable is defined immediately
 * it does not start emitting values until there is
 * a subscriber (at 3 seconds), and it stops emitting
 * values after the oberserver unsubscribes (at 7.5s)
 */

let subscription;
setTimeout(() => subscription = integers$.subscribe(console.log), 3000);
setTimeout(() => subscription.unsubscribe(), 7500);

/*
 * publishing an observable turns it into a hot stream
 * values will begin flowing when connect is called
 * all subscribers will receive the same values
 */

import Rx from 'rxjs';

const integers$ = Rx.Observable.interval(1000).publish();
integers$.connect();

setTimeout(() => {
  integers$.subscribe(console.log)
}, 3000)

setTimeout(() => {
  integers$.subscribe((x) => console.log(`${x}!`))
}, 5000);

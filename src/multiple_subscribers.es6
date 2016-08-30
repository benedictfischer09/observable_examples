import Rx from 'rxjs';

const integers$ = Rx.Observable.interval(1000);

integers$.subscribe(console.log)

setTimeout(() => {
  integers$.subscribe((x) => console.log(`${x}!`))
}, 3000);

import Rx from 'rxjs-es6/Rx';
import rp from 'request-promise';

/* simulate a stream of characters */
const letters$ = Rx.Observable.
                    interval(500).
                    map((num) => String.fromCharCode(97 + (num % 26)));

/* horizontally combine characters into phrases */
const phrase$ = letters$.scan((acc, letter) => `${acc}${letter}`);

/* rate limit phrases */
const searchPhrase$ = phrase$.throttleTime(1000).
                               map(encodeURIComponent);
const searches$ = searchPhrase$.flatMap((q) => {
                                  return Rx.Observable.fromPromise(search(q))
                                });

searches$.subscribe(console.log);

function search(q){
  return rp('https://jsonplaceholder.typicode.com/posts?search=${q}');
}

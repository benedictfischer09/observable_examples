/*
 * This is how you would get a stream of integers with observables
 */
import Rx from 'rxjs';

Rx.Observable.interval(1000).subscribe(console.log)

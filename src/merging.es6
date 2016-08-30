import Rx from 'rxjs-es6/Rx';

const num$ = Rx.Observable.of(1,2,3)
const name$ = Rx.Observable.of('Jill', 'Sarah', 'Amy');

const latest$ = name$.combineLatest(num$);
const zip$ = name$.zip(num$);
const merge$ = name$.merge(num$).map((value) => value.toString().toUpperCase());

latest$.subscribe((values) => console.log('latest:', ...values));
zip$.subscribe((values) => console.log('zip:', ...values));
merge$.subscribe((value) => console.log('merge:', value));

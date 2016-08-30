import Rx from 'rxjs';

Rx.Observable.interval(1000). // this is an observable
              take(2). // and so is this
              subscribe(
                console.log, // callback for values
                null, // callback for errors
                () => console.log('done') // callback for done
              ) // subscribing to the 2nd obserable follows
                // the subscription chain

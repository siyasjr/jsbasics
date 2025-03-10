// A minimal implementation of a promise-like class (Pact) that 
//supports then and catch methods for handling asynchronous operations.

class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = (value) => {
            this.catchFn(value);
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch(_catch) {
        this.catchFn = _catch;
    }
}
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Hello!");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous");
    }
}
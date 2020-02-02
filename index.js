const sequence = (start, step) => {
    let currStep = start

    return () => {
        const currVal = currStep
        currStep += step

        return currVal
    }
}

var generator = sequence(10, 3);
console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator()); // 16
function sum(a) {
    let sumVal = a

    function sumInner(b) {
        sumVal += b
        return sumInner
    }

    sumInner.valueOf = function () {
        return sumVal
    }



    return sumInner
}


console.log('sum', sum(1)(2)(3)(4)(5))
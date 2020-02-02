function getIfo(floor, pod, count, numberAppartment) {
    if (!numberAppartment && typeof value !== 'number') {
        console.log('Not number appartment')
        return
    }

    let appPod = Math.ceil(numberAppartment / (count * floor))
    let appFloor = Math.ceil((numberAppartment - ((appPod - 1) * floor * count)) / count)

    console.log('Appartment pod:' + appPod + ', floor:' + appFloor)

    return {
        appPod,
        appFloor
    }

}

getIfo(10, 4, 4, 109)
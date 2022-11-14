let lastPick = null

const Randomizer = _array => {
    const randomValue = _array[Math.floor(Math.random()*_array.length)]

    if(lastPick == randomValue) {
        Randomizer(_array)
    } else {
        lastPick = randomValue
        return randomValue
    }
}

export default Randomizer
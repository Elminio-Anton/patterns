const pipe = (...arrayOfFunctions) => {
    if (arrayOfFunctions.length === 0) return undefined
    else if (arrayOfFunctions.length === 1) return arrayOfFunctions[0]()
    return arrayOfFunctions.reduce((prev, func) => {
        return func(prev)
    }, undefined)
}

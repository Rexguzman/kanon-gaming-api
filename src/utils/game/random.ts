const random = (array: Array<string>) => {
    const length = array.length;
    const randomElement = array[Math.floor(Math.random()*length)]
    console.log(randomElement)
    return randomElement;
}

export default random
const generateRandomElements = (arr) => {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    const randomIndex2 = (randomIndex1 + Math.floor(Math.random() * (arr.length - 1) + 1)) %
        arr.length;

    const randomElements = arr
        .splice(randomIndex1, 1)
        .concat(
            arr.splice(
                randomIndex2 > randomIndex1
                    ? randomIndex2 - 1
                    : randomIndex2,
                1
            )
        );

    return randomElements;
};


export{generateRandomElements }
function retornaDuplicatas (newArray) {
    let elementString;
    let duplicatas = [];
    let previousElement = [];
    let actualElement = '';
    newArray.forEach(element => {
        elementString = element.toString().split("");

        elementString.forEach(insideElement => {
            previousElement.push(actualElement);
            actualElement = insideElement;

            if (previousElement.includes(actualElement)) {
                if(!duplicatas.includes(actualElement)) duplicatas.push(actualElement)
            }

        })
    });

    return duplicatas;
}

console.log(retornaDuplicatas([11,2,3,444,777,8,9,3]))
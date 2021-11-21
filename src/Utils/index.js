


const parser = (data = []) => {
    // case when data is null, return null
    if (!data) return null
    if (!Array.isArray(data)) return data;
    return start(data, 0, data.length, {});
}

const start = (data, index = 0, stop, result) => {
    if (index >= stop) {
        // end of loop, return the result
        return result;
    } else {
        const nextData = data[index];
        const parseChildren = parser(nextData);
        if (index === 0) {
            // first position is an id
            result['id'] = parseChildren;
        }
        if (index === 1) {
            // left position could be [],1,"a"
            result['left'] = parseChildren;
        }
        if (index === 2) {
            // right position could be [],1,"a"
            result['right'] = parseChildren;
        }
        // continue the loop in next position
        return start(data, index + 1, stop, result)
    }
}




export {
    parser
}
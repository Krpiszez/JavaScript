//sort functions
const strSortAsc = (strArr) => {
    const sortedArr = [...strArr].sort();
    return sortedArr;
}

const strSortDesc = (strArr) => {
    const sortedArr = [...strArr].sort().reverse();
    return sortedArr;
}

const numSortAsc = (numArr) => {
    const sortedArr = [...numArr].sort();
    return sortedArr;
}

const numSortDesc = (numArr) => {
    const sortedArr = [...numArr].sort().reverse();
    return sortedArr;
}

export {strSortAsc, strSortDesc, numSortAsc, numSortDesc};

//There is another way to use sort method with strings

// const strSortAsc = (strArr) => {
//     const sortedArr = [...strArr].sort((a,b)=>b.localeCompare(a)); will work in every letters in every alphabets. This also a callback
//     return sortedArr;
// }

//There is another way to use sort method with numbers as well


// const numSortAsc = (numArr) => {
//     const sortedArr = [...numArr].sort((a,b)=> a-b); b-a for desc
//     return sortedArr;
// }

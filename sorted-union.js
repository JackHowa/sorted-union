function uniteUnique(arr) {
    // concat brings the arrays together as the arguments are set in an array
    const flatArray = [].concat(...arguments);

    // set inside of spread operator doesn't allows duplicates
    // the Set object lets you store unique values of any type, whether primitive values or object references.
    const dedupedArray = [...new Set(flatArray)];

    // sort causes numerical order
    return dedupedArray.sort();
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
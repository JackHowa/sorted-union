function uniteUnique(arr) {
    return Array.from(arguments); // es2015 this is simpler than spread 
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
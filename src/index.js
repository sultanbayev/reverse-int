module.exports = function reverse (n) {
    if (n < 0) n *= -1
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed)
}

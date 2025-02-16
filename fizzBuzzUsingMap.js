//fizzbuzz but with Array.prototype.map

function fizzbuzz(numbers) {
    return numbers.map(num => {
        if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
        if (num % 3 === 0) return "fizz";
        if (num % 5 === 0) return "buzz";
        return "";
    }).join("");
}

module.exports = fizzbuzz;
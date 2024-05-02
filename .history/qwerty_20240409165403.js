function minCookingTime(n, m) {
    const batches = Math.ceil(n / m);
    return Math.max(batches * 2 - 1, batches);
}

// Example usage:
const totalPancakes = 4; // Total number of pancakes
const maxPancakes = 3;    // Maximum number of pancakes cooked at a time
const minTime = minCookingTime(totalPancakes, maxPancakes);
console.log("Minimum cooking time:", minTime, "minutes");
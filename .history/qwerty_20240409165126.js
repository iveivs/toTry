
function minCookingTime(n, m) {
    // Number of minutes for the first batch
    let firstBatch = Math.ceil(n / m);
    
    // Number of minutes for the second batch
    let secondBatch = Math.ceil(n / m) - 1;
    
    // Minimum cooking time - maximum of the cooking times of the two batches
    return Math.max(firstBatch, secondBatch);
}

// Example usage:
const totalPancakes = 4; // Total number of pancakes
const maxPancakes = 3;    // Maximum number of pancakes cooked at a time
const minTime = minCookingTime(totalPancakes, maxPancakes);
console.log("Minimum cooking time:", minTime, "minutes");
function minimumCookingTime(n, m) {
    // Calculate the number of batches needed
    const batches = Math.ceil(n / m);
    
    // Calculate the total cooking time for full batches
    let totalTime = batches * m;
    
    // If there are remaining pancakes, add one more minute for each
    if (n % m !== 0) {
        totalTime += n % m;
    }
    
    return totalTime;
}

// Example usage:
const n = ; // Total number of pancakes
const m = 3;  // Maximum number of pancakes cooked at a time
const minTime = minimumCookingTime(n, m);
console.log("Minimum cooking time:", minTime, "minutes");
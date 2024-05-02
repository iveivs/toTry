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
const n = 4; // Total number of pancakes
const m = 3;  // Maximum number of pancakes cooked at a time
const minTime = minimumCookingTime(n, m);
console.log("Minimum cooking time:", minTime, "minutes");

// - - - - -
function minimumCookingTime(n, m) {
    // Количество минут для первой партии
    let firt = Math.ceil(n / m);
    
    // Количество минут для второй партии
    let втораяПартия = Math.ceil(n / m) - 1;
    
    // Минимальное время приготовления - максимум из времен приготовления двух партий
    return Math.max(перваяПартия, втораяПартия);
}

// Пример использования:
const n = 4; // Общее количество блинов
const m = 3; // Максимальное количество блинов, приготавливаемых одновременно
const минВремя = minimumCookingTime(n, m);
console.log("Минимальное время приготовления:", минВремя, "минут");
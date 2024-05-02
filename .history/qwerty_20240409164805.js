
// - - - - -
function minimumCookingTime(n, m) {
    // Количество минут для первой партии
    let firtht = Math.ceil(n / m);
    
    // Количество минут для второй партии
    let second = Math.ceil(n / m) - 1;
    
    // Минимальное время приготовления - максимум из времен приготовления двух партий
    return Math.max(firtht, втораяПартия);
}

// Пример использования:
const n = 4; // Общее количество блинов
const m = 3; // Максимальное количество блинов, приготавливаемых одновременно
const minTime = minimumCookingTime(n, m);
console.log("Минимальное время приготовления:", minTime, "минут");
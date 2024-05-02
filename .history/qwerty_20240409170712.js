function minCookingTime(n, m) {
    if (n <= m) {
        return 2; // Если блинов меньше или равно, чем можно приготовить одновременно, то 2 минуты
    } else {
        return Math.ceil(n / m) * 2 - 1; // Иначе количество порций * 2 минуты, за вычетом одной минуты
    }
}

// Пример использования:
console.log(minCookingTime(4, 4)); // Ожидаемый результат: 2 минуты
console.log(minCookingTime(3, 3)); 
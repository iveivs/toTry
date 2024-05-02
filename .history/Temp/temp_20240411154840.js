function convertText(word) {
    return word[0] === word[0].toUpperCase() ? word : word..split('')
    // метод reverse() выстраивает элементы массива в обратном порядке
    .reverse()
    // преобразуем массив обратно в строку
    .join('');
}
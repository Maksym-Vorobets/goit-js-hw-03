function filterArray(numbers, value) {
    // Створюємо порожній масив для зберігання підходящих чисел
    const filteredNumbers = [];
    
    // Ітеруємо кожний елемент масиву numbers
    for (let i = 0; i < numbers.length; i++) {
      // Якщо поточне число більше за value, додаємо його до filteredNumbers
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }
    
    // Повертаємо новий масив з підходящими числами
    return filteredNumbers;
  }
  
  // Перевірка роботи функції
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
  
// Компонент с произвольным названием из 3 слов
const MyCustomComponent = () => {
  // Функция 1
  const myFunction1 = () => {
    // Массив произвольного наполнения из 3 элементов
    const data = ["элемент 1", "элемент 2", "элемент 3"];

    // Вызов функции 2
    myFunction2(data);
  };

  // Функция 2
  const myFunction2 = (data) => {
    // Вывод в консоль всех элементов массива
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  };

  // Вызов функции 1
  myFunction1();

  return null; // Возвращаем null, так как компонент не содержит JSX
};

export default MyCustomComponent;

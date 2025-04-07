/*   --3-- 
Напишите функцию, которая принимает число как аргумент и
возвращает функцию, которая также принимает число как аргумент и 
возвращает сумму этих двух чисел. Выведите в консоль результат.




function firstNumber(num1) {
    return function secondNumber(num2) {
        return num1 + num2;
    }
}

const resultFunc = firstNumber(Math.floor(Math.random() * 101));
console.log(resultFunc(Math.floor(Math.random() * 101)))*/

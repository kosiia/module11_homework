/*   --2--
Напишите функцию, которая принимает на входе любое число 
(но не больше 1 000), определяет, является ли оно простым, 
и выводит, простое число или нет. Если введено больше 1 000, 
то выводится сообщение, что данные неверны. Обратите внимание 
на числа 0 и 1.

function primeNumber (n) {

    if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return  `число ${n} - не является простым`;
            } 
        }
        return `число ${n} - простое`;
    }

    if (n <= 1) {
        return `число ${n} - не является простым`;
    }

    if (n >= 1000) {
        return 'данные не верны';
    }

}

console.log(primeNumber(Math.floor(Math.random() * 1001)));*/



//    --1--
/*В прошлом модуле в юните «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и 
нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, 
что массив может содержать не только числа, 
но и знаки, например null и так далее.

На этот раз оформите решение в виде функции: постарайтесь дать 
этой функции корректное название, вызовите функцию, 
проанализируйте синтаксис.

let arr = [null, 1, 10, 7, true, 4, 9, null, 8, false, '']
let countNull = 0;
let countOther = 0;
let countEven = 0;
let countOdd = 0;

function getAmountElem(){
    for(let elem of arr){
        if (elem === null) {
            countNull++
        } else if (typeof elem !== 'number') {
            countOther++
        } else if (elem % 2 !== 0) {
            countOdd++
        } else {
            countEven++
        }
    }
console.log(`количество null элементов - ${countNull}`)
console.log(`количество других элементов - ${countOther}`)
console.log(`количество чётных элементов - ${countEven}`)
console.log(`количество не чётнных элементов - ${countOdd}`)
}

getAmountElem();*/



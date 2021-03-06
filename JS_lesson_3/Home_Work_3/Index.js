/* "кот">"Код"
будет true т.к. сравнивается каждая буква в слове по очередно, 
т.е.к=к, о=о, т>д,  по Unicode  буква "д" имеет меньший вес*/
const firstString = "кот";
const secondString = "код";

console.log(firstString > secondString);
console.log("кот" > "Код");
//будет true т.к. сравнивается каждая буква в слове по очередно, т.е.к=к, о=о, т>д,  по Unicode  буква "д" имеет меньший вес

/*"2"+2*"2"
24, т.к. из за умножения строка "2" преобразуется в число 2,
получается 2*2=4, первая двойка строка остается неизменной знак + только один, 
он дописывает результат умножения в строку, в итоге получается "24" строка.*/
console.log("2" + 2 * "2");
console.log(typeof ("2" + 2 * "2"));

/* undefined==null, будет true, по "особому" правилу js, 
значения равны только друг другу*/
console.log(undefined == null);

/*underfined!=null, будет false т.к. по правилу JS они могут быть равны только друг другу*/
console.log(undefined != null);

/* null==0, fals т.к. null пустое значение, не является 0*/
console.log(null == 0);

/* 2 > "3", false, строка "3" преобразуется в число, 2<3*/
console.log(2 > "3");

/* null - false + true, ответ: 1 т.к. null преобразуется 0, идет операция вычитания, 
по этой же причине fals преобразуется 0, а true преобразуется в число за счет знака "+".*/
console.log(null - false + true);

/* 1 / "l", ответ NaN,число делится на строку*/
console.log(1 / "l");

/* "2" * "3" , ответ 6 знак умножения преобразует строки в числа */
console.log("2" * "3");

/* 4 + 5 + "O" , ответ:"9O", т.к.  данном случае + единичный между чисел они складываются, 
"О"- буква в строке, не преобразуется в Number */
console.log(4 + 5 + "O");
console.log(typeof (4 + 5 + "O"));

/* "l" + 4 + 5 ответ: I45, строка остается строкой, к ней добисывается 4, 
получается что второе действие выглядит как "I4", следовательно складывая строку с числом 5, получаем строку "I45"*/
console.log("l" + 4 + 5);
console.log(typeof ("l" + 4 + 5));

/* "4" - 2, ответ:2, т.к. число в строке при вычитании преобразуется в number*/
console.log("4" - 2);
console.log(typeof ("4" - 2));

/* "4" - "4x" ответ: NaN, т.к. получается что из числа вычитаем строку*/
console.log("4" - "4x");

/* “23” == 23, true, строка преобразуется в число, а числа 23 и 23 равны*/
console.log("23" == 23);

/* null == false,    false т.к. сравнивать null можно только с undefined*/
console.log(null == false);

/* " -4 "/ 0 + 1 , infinity, деление на 0 преобразует строку в число, 
что дает минус бесконечность,прибление единицы дают ту же бесконечность*/
console.log(" -4 " / 0 + 1);

/* null + 1 , ответ 1, т.к.  null преобразуется в 0*/
console.log(null + 1);

/* undefined + null, ответ: NaN, undefined преобразуется в NaN, а null в 0*/
console.log(undefined + null);

/* 1 === “1” fals, т.к. в данном случае строгое равенство, число не равно строке*/
console.log(1 === "1");

/* “2” > 10 , false, строка преобразуется в число 2, данное число меньше 10*/
console.log("2" > 10);

/* NaN == undefined , false, undefinde можно сравнивать только с null*/
console.log(NaN == undefined);

var min = 0;
var max = 11;
var success = 0;
var counters = 1000;


//условия задачи
var result1 = ["white", "black", "black"];
var result2 = ["black", "white", "black"];
var result3 = ["black", "black", "white"];


//следовало бы назвать это карзиной мб, и я не стал делать с булями, что бы не путаться
var balls = ["white","white","white","white","white","white","white","black","black","black","black","black"];

//рандомим тут целое число (говорят метод не оч, но он честно спиджен из инета)
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Самопальная функция по проверки массивов на равенство, без всяких проверок (да гавнокод)
function isEq (args1, args2) {
	if ((args1[0] == args2[0]) && (args1[1] == args2[1]) && (args1[2] == args2[2])) {
			return true;
	}
	return false;
}

//на цикле все умерло, если его отключить, все здорово. 


for (i=0; i < counters; i++){
	//рандомим тут три числа, от мин до макс.
	// console.log("Шаг цикла " + i);
	var first = getRandom(min, max);
	var second = getRandom(min, max);
	var third = getRandom(min, max);

//А не вытащили ли мы один и тот же мяч за раз? 
	if ((first != second) && (first != third) && (second != third)) {

		//формируем свой массив со всем что надо) 
		var main = [balls[first], balls[second], balls[third]];

		if (isEq(main, result1) || isEq(main, result2) || isEq(main, result3)) {
					success++;
		}
	}

	else {
		i--;
		//обрабатываем else как исключение. и гоним на второй круг. 
		// console.log('Вычли');
	}
}


// document.getElementById('Gold').innerHTML = Gold;

console.log( "Успешно "  + success);
console.log( "Из "  + counters + " попыток");
console.log( "Процент успешности " + Math.floor((success*100)/counters));

document.getElementById('success').innerHTML = ("Успешно " + success);
document.getElementById('counters').innerHTML = ( "Из "  + counters + " попыток");
document.getElementById('stats').innerHTML = ( "Процент успешности " + Math.floor((success*100)/counters) + " %");
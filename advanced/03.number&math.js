let num = 10;

console.log(typeof num.toString(2));

console.log(Math.PI);
Math.ceil(); //소수점 상관없이 올림
Math.floor(); //소수점 상관없이 내림
Math.round(); //반올림
//요구사항 : 소수점 둘째짜리까지 표현 (셋째자리에서 반올림)
let num2 = 3.123113;
let num2_round2 = Math.round(num2 * 100) / 100;
console.log(num2_round2);
console.log(num2.toFixed(2));
//toFixed():String을 반환하기때문에 Number()사용해서 숫자로 바꾼뒤 사용
//isNaN():not a number인지 확인
let num3 = "10px";
console.log(parseInt(num3));
//parseInt는 문자가 섞여있어도 읽을수있는곳까지는 읽고 숫자로 반환

console.log(parseInt("11", 2));

Math.random(); // 0~1사이의 숫자를 랜덤으로 생성
console.log(Math.floor(Math.random() * 100) + 1);

Math.max(); //최댓값 찾기
Math.min(); //최솟값 찾기
Math.abs(); //절댓값
console.log(Math.pow(2, 10)); //제곱
Math.sqrt(16); //제곱근

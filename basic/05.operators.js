//홀수 : X%2 = 1
//짝수 : X%2 = 0

//어떤 값이 들어와도 5를 넘기면 안됨
// X%5 = 0~4사이의 값만 반환

const num = 2 ** 3; //거듭제곱

//연산자 줄여서 쓰기
let number = 10;
number = number + 10;
number += 10;

//증가연산자, 감소연산자
let num2 = 3;
num2++;
num2--;
console.log(num2);
let num3 = 1;
let num4 = 1;
let result = ++num3;
let result2 = num4++;
console.log(result);
console.log(result2);

//비교연산자
a = 3;
a == 3; //동등연산자
a != 3;
console.log(1 == "1"); //단순히 같은지만 비교
console.log(1 === "1"); //type까지 같은지 비교 (일치연산자)

//조건문
if (a > 2) {
  console.log("True");
} else if (a === 2) {
  console.log("age:2");
} else {
  console.log("False");
}

//논리연산자
// &&(and) ||(or) !(not)
const name5 = "Mike";
const age1 = 30;
if (name5 === "Tome" || age1 > 19) {
  console.log("pass");
}

//논리연산자의 우선순위 and>or
const gender = "F";
const name6 = "Jane";
const isAdult2 = true;

if ((gender === "M" && name6 === "Mike") || isAdult2) {
  console.log("Pass");
} else {
  console.log("Fail");
}

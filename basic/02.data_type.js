const name1 = "Mike";
const name2 = "Mike";
const name3 = `Mike`;

//문자형(String)
const message = "I'm a boy.";
console.log(message);
const message2 = "I'm a boy.";
console.log(message2);
const message3 = `My name is ${name1}`;
console.log(message3);
const message4 = `My age is ${30 + 1}`;
console.log(message4);

//숫자형(Numer)
const age = 30;
const PI = 3.14;

console.log(1 + 2); //더하기
console.log(10 - 3); //빼기
console.log(3 * 2); //곱하기
console.log(6 / 4); //나누기, 문자형끼리의 계산은 자동으로 숫자형으로 형 변환
console.log(6 % 4); //나머지계산
console.log(1 / 0); //Infinity
console.log(name1 / 2); //NaN(Not a Number)

//논리형(Boolean)
const a = true; //참
const b = false; //거짓

console.log(name1 == "Mike");
console.log(age > 40);

// null & undefined
let age2;
console.log(age2); //undefined
let user = null;
console.log(user); //null

// typeof 다른 개발자나 api통신을 이용해야할때 사용
console.log(typeof 3);
console.log(typeof name2);
console.log(typeof null); // object(객체형)

// 자료형 연산
const name4 = "Jane";
const c = 30;
console.log(name4 + c); //숫자형과 문자형의 연산의 경우 문자형으로 변환됨

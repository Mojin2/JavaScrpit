//구조분해할당
//배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

let [x, y] = [1, 2];
console.log(x);
console.log(y);

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;

//배열구조분해 : 바꿔치기
let a = 1;
let b = 2;

let c = a;
a = b;
b = c;

[a, b] = [b, a]; //위 식을 간단하게 구조분해로 표현

//객체 구조 분해
let user = { name: "Mike", age: 30 };
let { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

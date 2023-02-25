//객체 리터럴
let user = {
  name: "Mike",
  age: 30,
};

//생성자 함수 : 객체를 여러개 생성해야할때 사용
function User(name, age) {
  //생성자 함수의 첫글자는 항상 대문자
  //this={}
  this.name = name;
  this.age = age;

  this.sayName = function () {
    console.log(this.name);
  };

  //return this;
}

let user1 = new User("Jane", 22);
console.log(user1);
user1.sayName();

//Computed property
let a = "age";
const user2 = {
  name: "Minsu",
  [a]: 30,
};
//console.log(user2);

//Object-method
//1.Object.assign(): 객체 복제
const newUser2 = user2; //메모리값을 참조하기때문에 value값을 바꾸면 원래꺼도 바뀜
const newUser22 = Object.assign({ gender: "male" }, user2);
console.log(newUser22);
//2.Object.keys() : 키 배열 반환
console.log(Object.keys(newUser22));
//3.Object.values() : 값 배열 반환
console.log(Object.values(newUser22));
//4.Object.entries() : 키와 값을 모두 배열로 반환
console.log(Object.entries(newUser22));
//5.Object.fromEntries() : 키와 값을 모두 객체로 반환
const arr_newUser22 = Object.entries(newUser22);
console.log(Object.fromEntries(arr_newUser22));

//Symbol: 유일한 식별자
const a1 = Symbol();
const b1 = Symbol();
//console.log(a1 === b1);

//Symbol.for()함수는 전역심볼로 공유
const a2 = Symbol.for("id");
const b2 = Symbol.for("id");
//console.log(a2 === b2);
//console.log(a2 == b2);
//console.log(Symbol.keyFor(a2));
//console.log(a1.description);

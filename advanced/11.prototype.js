//prototype
const user = {
  name: "Mike",
};
console.log(user.hasOwnProperty("name"));

const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};

const bmw = {
  color: "blue",
  navigation: 1,
};

bmw.__proto__ = car; //bmw는 car의 상속을 받음
bmw.drive();

const x5 = {
  name: "x5",
};

x5.__proto__ = bmw; //x5는 bmw의 상속을 받음
x5.drive();

for (p in x5) {
  console.log(p);
} //상속받음 모든 property가 나옴

console.log(Object.keys(x5));
console.log(Object.values(x5));
//Object에는 상속받은것은 안나옴

const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.drive = function () {
  console.log("drive...");
};

const x4 = new Bmw("red");
x4.drive();
console.log(x4 instanceof Bmw);

//get함수를 만들어서 생성자의 인수를 보호할 수 있음

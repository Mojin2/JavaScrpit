const superman = {
  name: "슈퍼맨",
  age: 33,

  fly() {
    console.log(`${this.name} 하늘을 나는중`);
  },
  fly2: function () {
    console.log(`${this.name} 하늘을 나는중`);
  },
  fly3: () => {
    console.log(`${this.name} 하늘을 나는중`);
  }, //object에서 화살표함수는 this를 전역환경에서 가져옴
};

//접근
superman.name;
superman["name"];

//추가
superman.gender = "male";
superman["haircolor"] = "black";

//삭제
delete superman.haircolor;

for (let key in superman) {
  //console.log(key);
  //console.log(superman[key]);
}

function makeObject(name, age) {
  return {
    name: name,
    age: age,
  };
}

//console.log("age" in superman);

for (x in superman) {
  //console.log(x);
}

//method, this
superman.fly();

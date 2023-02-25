const User = function (name, age, occupation) {
  this.name = name;
  this.age = age;
  const occ = occupation;
  this.showName = function () {
    console.log(this.name);
  };
  this.getOccupation = function () {
    console.log(occ);
  };
};

const mike = new User("Mike", 30, "singer");
mike.getOccupation();

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 25);
console.log(tom);

//함수형에서는 함수가 객체의 하나로 들어감
//for문을 통해 루프를 돌릴때 같이 나옴

//class에서는 함수가 prototype으로 들어감

//class에서의 상속 : extends

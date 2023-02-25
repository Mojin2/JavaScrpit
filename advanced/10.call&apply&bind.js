const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showName() {
  console.log(this.name);
}

//call로 this객체를 지정해줌
showName.call(mike);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1996, "singer");
console.log(mike);

//apply사용 (매개변수를 배열로 받음)
update.apply(tom, [1997, "dancer"]);
console.log(tom);

const nums = [3, 10, 1, 6, 4];
const minNum_apply = Math.min.apply(null, nums);
const minNum_call = Math.min.call(null, ...nums);

//bind
const updateMike = update.bind(mike);
updateMike(1980, "police");
console.log(mike);

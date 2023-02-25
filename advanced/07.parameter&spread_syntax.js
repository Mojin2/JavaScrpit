//arguments의 사용
function showName(name) {
  console.log(name);
  console.log(arguments.length);
}

showName("Mike");
showName("Mike", "Tom");
//함수로 넘어온 모든 인수에 접근
//함수내에서 이용 가능한 지역변수
//length, index
//Array형태의 객체

//Rest parameter 나머지 매개변수의 사용
function showName_rest(...names) {
  console.log(names);
}
//인수를 배열로 받음

//전개구문
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
console.log(result);

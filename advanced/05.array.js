let arr = [1, 2, 3, 4, 5];

//  arr.splice(n, m, x); //n번째부터 m개의 요소를 지움 그리고 요소x들을 그 자리에 추가
result = arr.splice(1, 2);
console.log(result); //삭제된 요소들을 반환

arr.slice(2, 3); //slice():n부터 m(포함X)까지를 반환
let concat_arr = arr.concat([6, 7]); //concat():배열 합치기
//console.log(concat_arr);

//for each 반복문
let name_arr = ["Mike", "Tome", "Jane"];
name_arr.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

//indexof
arr.indexOf(3, 3); //indexof(n,m):n번째부터 시작해서 m의 인덱스를 반환
arr.lastIndexOf(3); //끝에서부터 탐색

arr.includes(3); //배열내에 포함되면 true를 반환

//arr.find : 찾은 첫번째 요소를 반환
//arr.findIndex : 찾은 첫번째 요소의 인덱스를 반환

//arr.filter(fn) : 모든 요소를 찾음
//arr.reverse() : 배열을 역순으로 정렬
//arr.map() : 새로운 방식으로 배열을 바꿈

//arr.join(" ") : 배열을 문자열로 합침
//arr.split(" ") : 문자열을 배열로 반환

//arr.isArray();

//sort, reduce
function fn(a, b) {
  return a - b;
}
arr.sort(fn);
//Lodash라이브러리를 사용하면 함수를 만들 필요 없이
//.sortBy(arr)함수를 통해서 정렬가능

//arr.reduce(fn); // 배열을 돌면서 원하는 작업을 함
const result2 = arr.reduce((prev, cur) => {
  return (prev += cur);
}, 0);
console.log(result2);

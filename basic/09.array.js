//배열 : 순서가 있는 list
let students = ["철수", "영희", "영수"];
console.log(students[0]);

students[0] = "민정";
console.log(students[0]);

//배열은 문자 뿐만 아니라 숫자 객체 함수 등도 포함할 수 있음
console.log(students.length);
students.push("민수"); //배열 가장 뒤에 요소 추가
console.log(students.length);
students.pop(); //배열 끝 요소 제거
students.unshift("민수"); //배열 가장 앞에 추가
students.shift(); //배열 가장 앞 요소 제거

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//반복문 for .. of
let days = ["월", "화", "수"];
for (let day of days) {
  console.log(day);
}

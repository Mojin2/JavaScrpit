let des = "Nice to meet you";
console.log(des);
des[4] = "t"; //String은 중간에 바꾸는게 불ㄱ가능
//console.log(des);
des.toUpperCase();
//console.log(des);
des.toLowerCase();
//console.log(des);
console.log(des.indexOf("c"));
//indexOf():해당 문자열의 인덱스를 반환, 없을경우 -1을 반환
des.includes(); //해당 문자열이 있으면 true를 반환

console.log(des.slice(0, 1)); //slice(시작인덱스, 끝나는인덱스(포함X))
des.substring(0, 2); //substring(n,m) : n과m사이의 문자열을 반환
des.substr(); //substr(n,m) : n부터 시작해서 m개의 문자열을 반환
des.trim(); //trim() : 문자열 앞과 뒤의 공백을 제거
des.repeat(); //repeat(n) : 문자열을 n번 반복

"a".codePointAt(0);
String.fromCodePoint(97);

function hasDesc(str) {
  if (str.indexOf("some") > -1) {
    console.log("pass");
  } else {
    console.log("fail");
  }
} //해당 문자열이 있는지 확인하려면 -1 보다 큰지로 범위확인

//String() 문자형으로 변환
//Number() 숫자형으로 변환
//Boolean() 논리형으로 변환

const mathScore = "30";
const engScore = "40";
const result = (Number(mathScore) + Number(engScore)) / 2;

console.log(result);

console.log(String(3));

//false가 되는 Boolean형변환
Boolean(0);
Boolean("");
Boolean(null);
Boolean(undefined);
Boolean(NaN);

//주의사항
Number(null); // 0
Number(undefined); // NaN

Boolean(0); // false
Boolean("0"); // true
Boolean(""); // false
Boolean(" "); // true

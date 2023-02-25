function showError() {
  console.log("Err");
}

//howError();

function sayHello(name) {
  let newname = name || "frined";
  let msg = `Hello, ${newname}`;
  console.log(msg);
}
//msg는 지역변수이기때문에 함수 내부에서만 사용 가능
//sayHello();
//return문이 없는 함수는 undefined를 반환

//함수표현식
let sayHallo = function () {
  console.log("Hallo");
}; //해당 함수가 선언한 이후에만 사용 가능

//함수선언식
function sayHallo2() {
  console.log("Hallo");
} //어디서든 호출 가능 >> 호이스팅(hoisting) : 초기화단계에서 모든 선언함수를 미리 생성해둠

//화살표 함수
const sayHallo3 = () => {
  console.log("Hallo");
};

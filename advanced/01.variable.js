//var : 한번 선언된 변수를 다시 선언 가능
var name = "Mike";
console.log(name);
var name = "Jane";
console.log(name);
//var로 선언된 변수는 선언하기전에 사용가능 (초기화시에 호이스팅됨)
//선언만 호이스팅되고 할당은 호이스팅 되지 않음 -> undefined
//let도 호이스팅되지만 ReferenceError발생
//TDZ(Temporal Dead Zone)때문에 에러발생
//var : 선언과 초기화돤계가 동시에 이루어짐

//스코프
//var: 함수스코프
//let, const: 블록 스코프
//함수스코프는 함수가 아닌 if,while문과 같은 다른 블록에서 선언해도
//해당 블록 밖에서 사용 가능해짐

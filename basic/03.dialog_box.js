//alert 알려줌 (확인버튼만 있음)
alert("환영합니다.");
//prompt 입력 받음
const name = prompt("이름을 입력하세요", "default값");
alert(name + "님 환영합니다.");
//confirm 확인 받음 (확인과 취소버튼이 있음)
const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);

//단점
//창이 떠있는 동안은 스크립트 일시정지
//스타일링 불가능 위치와 브라우저가 고정
//html과 css를 이용한 Modal창 사용

/* 최종 수정일 : 2017-10-20 */
/* 2. 변수 */

var a = 10; // 가장 기본적인 변수 선언 키워드 var 전역참조 가능
const PI = 3.14 // const로 선언하면 상수가 됨 (값 변경 불가능)
//PI = 4 이 문장은 오류가 생김

for(let i=0; i<5; i++){ //let으로 선언된 변수는 블록 내에서만 유요함.(현재 for문)
    console.log(a); // 블록이 다른곳에서 a변수 참조 (가능)
}

//console.log(i); 오류
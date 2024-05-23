const button = document.querySelectorAll('.button'); // querySelectAll : 두 개 이상의 button 클래스를 가지고 있는 요소 지정

function Darker() {
    let container = document.getElementById('container');
    let currentColor = getComputedStyle(container).backgroundColor;
    let rgbArray = currentColor.match(/\d+/g); // / : 정규식 패턴 시작 , \d : 숫자를 나타내는 문자 (0~9), / : 정규식 패턴 끝, g : 전역 검색 플래그, 모든 패턴이 일치하는 곳만 추출 ex) 1dsf2sdf3 -> "1" "2" "3"
    
    if ((parseInt(rgbArray[0], 10) - 40) >= 0) {
        let R = Math.round((parseInt(rgbArray[0], 10) - 40) / 10) * 10 // 오차 발생으로 인한 연산 절차
        let G = Math.round((parseInt(rgbArray[1], 10) - 40) / 10) * 10
        let B = Math.round((parseInt(rgbArray[2], 10) - 40) / 10) * 10
        container.style.backgroundColor = `rgb(${R}, ${G}, ${B})`; // 변수 삽입 시엔 백틱 사용
    } else if((parseInt(rgbArray[0], 10) - 40) < 0) { // parseInt(rgbArray[0], 10) : 문자열을 정수로 변환, 10진수로 변환
        container.style.backgroundColor = 'rgb(0, 0, 0)'; // 문제점 : 한번에 안됨. 나중에 해결해도 됨.
    }
}

function Brighter() {
    let container = document.getElementById('container');
    let currentColor = getComputedStyle(container).backgroundColor; // 형태 : rgb(r, g, b) 고로 필요없는 부분 삭제
    let rgbArray = currentColor.match(/\d+/g); // / : 정규식 패턴 시작 , \d : 숫자를 나타내는 문자 (0~9), / : 정규식 패턴 끝, g : 전역 검색 플래그, 모든 패턴이 일치하는 곳만 추출 ex) 1dsf2sdf3 -> "1" "2" "3"
    
    if ((parseInt(rgbArray[0], 10) + 40) <= 240) {
        let R = Math.round((parseInt(rgbArray[0], 10) + 40) / 10) * 10 // 오차 발생으로 인한 연산 절차
        let G = Math.round((parseInt(rgbArray[1], 10) + 40) / 10) * 10
        let B = Math.round((parseInt(rgbArray[2], 10) + 40) / 10) * 10
        container.style.backgroundColor = `rgb(${R}, ${G}, ${B})`; // 변수 삽입 시엔 백틱 사용
    } else if((parseInt(rgbArray[0], 10) + 40) > 240) { // parseInt(rgbArray[0], 10) : 문자열을 정수로 변환, 10진수로 변환
        container.style.backgroundColor = 'rgb(240, 240, 240)'; // 문제점 : 한번에 안됨. 나중에 해결해도 됨.
    }
}

button.forEach(button => { /* hover 대용 hover가 있다면 hover가 우선시됨.*/
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgb(128, 128, 128)';
        button.style.color = 'black';
        button.style.boxshadow = '8px 8px 16px rgba(0, 0, 0, 0.3)';
});
});

button.forEach(button => { /* hover 대용 (없어도 되는 기능) */
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'rgb(0, 0, 0)';
        button.style.color = 'white';
});
});
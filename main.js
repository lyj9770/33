let imgButton;
/* let swuz; */

/* function preload() {
  swuz = loadImage("swuz.svg");
} */

function setup() {
  createCanvas(windowWidth, windowHeight); // 캔버스 크기를 화면 크기에 맞춤
  
  // 이미지 버튼 생성
  imgButton = createImg('bt.svg'); // 이미지 경로 설정
  imgButton.mousePressed(goToNewPage); // 클릭 시 `goToNewPage` 함수 호출
  
  // 반응형 크기 설정 및 중앙 배치
  resizeButton();
}

function goToNewPage() {
  window.location.href = 'index2.html'; // 이동할 페이지의 경로 설정
}

function resizeButton() {
  let buttonWidth = windowWidth * 0.1;  // 화면 너비의 10%로 버튼 크기 설정
  let buttonHeight = buttonWidth;       // 가로세로 비율을 유지하기 위해 높이를 너비와 동일하게 설정
  
  imgButton.size(buttonWidth, buttonHeight); // 버튼 크기 설정
  
  // 버튼을 화면 중앙에 배치
  imgButton.position(windowWidth / 2 - buttonWidth / 2, windowHeight / 1.5 - buttonHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 캔버스 크기 조정
  resizeButton(); // 버튼 크기 및 위치 재조정
}

/* function draw() {
  background(255); // 흰색 배경
   */
 /*  // 이미지 크기와 위치를 반응형으로 설정
  let imgWidth = windowWidth * 0.3;  // 화면 너비의 30%로 이미지 크기 설정
  let imgHeight = imgWidth;         // 가로세로 비율 유지
  let imgX = windowWidth / 2 - imgWidth / 2; // 화면 중앙에 배치
  let imgY = windowHeight / 2 - imgHeight / 2; // 화면 위쪽에 배치
  
  // 이미지 그리기
  image(swuz, imgX, imgY, imgWidth, imgHeight);
} */

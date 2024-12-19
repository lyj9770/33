let img; // 배경 이미지
let maskGraphics; // 검정 레이어용 그래픽
let button; // 이미지 변경 버튼
let currentText = "산타 슈니즈를 찾아보세요!"; // 첫 번째 이미지 텍스트

let startTime;
let totalTime = 60; // 타이머 시간 (초)
let barWidth;
let timerEnded = false; // 타이머가 끝났는지 여부

function preload() {
  // 초기 이미지 로드
  img = loadImage('img.png'); // 첫 번째 이미지 경로
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  startTime = millis(); // 타이머 시작 시간

  // 검정 레이어 생성
  maskGraphics = createGraphics(windowWidth, windowHeight);
  maskGraphics.fill(0); // 검정색으로 채우기
  maskGraphics.rect(0, 0, windowWidth, windowHeight);

  // 이미지 버튼 생성
  button = createImg('swuz.svg', 'Clickable Image');
  button.position(20, 20); // 버튼 위치 설정
  button.mousePressed(changeImage); // 버튼 클릭 시 `changeImage` 함수 호출
  button.style('cursor', 'pointer'); // 마우스 오버 시 손 모양으로 변경
  button.size(60, 60); // 버튼 크기를 줄임
}

function draw() {
/*   // 배경에 이미지 그리기
  image(img, 0, 0, width, height); */

  // 이미지 비율 계산
  let imgRatio = img.width / img.height; // 이미지 비율
  let newWidth = width * 0.8; // 화면 너비의 80%로 이미지 너비 설정 (원하는 크기로 조정 가능)
  let newHeight = newWidth / imgRatio; // 비율을 유지한 높이 계산

  // 이미지가 화면보다 커지지 않도록 제한
  if (newHeight > height * 0.8) {
    newHeight = height * 0.8; // 화면 높이의 80%로 설정
    newWidth = newHeight * imgRatio; // 비율에 맞춰 너비 계산
  }

  // 배경에 이미지 그리기, 화면 중심에 배치
  image(img, (width - newWidth) / 2, (height - newHeight) / 2, newWidth, newHeight);

  // 검정 레이어 덮기
  image(maskGraphics, 0, 0);

  // 반응형 텍스트 크기 설정
  let responsiveTextSize = width / 30; // 화면 너비에 비례한 텍스트 크기
  fill(255); // 텍스트 색을 흰색으로 설정
  textSize(responsiveTextSize);
  textAlign(CENTER, TOP); // 상단 중앙 정렬
  text(currentText, width / 2, 20); // 상단 중앙에 텍스트 표시

  // 남은 시간 계산
  let elapsedTime = (millis() - startTime) / 1000; // 초 단위
  let remainingTime = totalTime - elapsedTime;
  remainingTime = max(0, remainingTime); // 남은 시간을 0 이하로 내려가지 않도록 설정
 
  // 바의 길이와 색상 계산
  let progress = remainingTime / totalTime;
  barWidth = windowWidth / 5; // 바의 전체 길이 (화면의 1/3)
  let currentWidth = progress * barWidth;
 
  // 색상 변화 (초록색에서 빨간색으로)
  let red = map(progress, 0, 1, 255, 0);
  let green = map(progress, 0, 1, 0, 255);
 
  // 둥근 바 그리기
  noStroke();
  fill(red, green, 0);
  rect(windowWidth - barWidth - 20, 20, currentWidth, 20, 10); // 모서리 반지름 10

  // 둥근 테두리 그리기
  stroke(255);
  noFill();
  rect(windowWidth - barWidth - 20, 20, barWidth, 20, 10); // 모서리 반지름 10
 
  // 타이머가 끝나면 멈춤
  if (remainingTime <= 0 && !timerEnded) {
    timerEnded = true; // 타이머 종료 상태 변경
    frameRate(30); // 프레임 속도를 제한하여 이벤트 처리 가능하도록 함
  }
}

function mouseDragged() {
  // 타이머가 끝난 경우에는 드래그가 동작하지 않도록
  if (!timerEnded) {
    // 드래그하는 위치를 원형으로 지우기
    maskGraphics.erase(); // 지우기 모드 활성화
    maskGraphics.circle(mouseX, mouseY, 50); // 마우스 위치에 원형 지우기
    maskGraphics.noErase(); // 지우기 모드 비활성화
  }
}

function changeImage() {
  // 이미지 변경 (새로운 이미지 로드)
  img = loadImage('img2.png'); // 두 번째 이미지 경로

  // 텍스트 변경 (새로운 텍스트로)
  currentText = "산타 공장에 있는 슈니즈를 찾아보세요!";

  // 검정 레이어 리셋
  maskGraphics.clear(); // 이전 내용을 지움
  maskGraphics.fill(0); // 검정색으로 다시 채우기
  maskGraphics.rect(0, 0, windowWidth, windowHeight); // 캔버스를 다시 채워서 리셋
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  maskGraphics = createGraphics(windowWidth, windowHeight); // 새 크기로 다시 생성
  maskGraphics.fill(0);
  maskGraphics.rect(0, 0, windowWidth, windowHeight); // 리셋된 레이어 채우기
}

let img; // 배경 이미지
let maskGraphics; // 검정 레이어용 그래픽
let button; // 이미지 변경 버튼
let currentText = "산타 슈니즈를 찾아보세요!"; // 첫 번째 이미지 텍스트

function preload() {
  // 초기 이미지 로드
  img = loadImage('img.png'); // 첫 번째 이미지 경로
}

function setup() { 
  createCanvas(windowWidth, windowHeight);

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
  // 배경에 이미지 그리기
  image(img, 0, 0, width, height);

  // 검정 레이어 덮기
  image(maskGraphics, 0, 0);

  // 반응형 텍스트 크기 설정
  let responsiveTextSize = width / 30; // 화면 너비에 비례한 텍스트 크기
  fill(255); // 텍스트 색을 흰색으로 설정
  textSize(responsiveTextSize);
  textAlign(CENTER, TOP); // 상단 중앙 정렬
  text(currentText, width / 2, 20); // 상단 중앙에 텍스트 표시
}

function mouseDragged() {
  // 드래그하는 위치를 원형으로 지우기
  maskGraphics.erase(); // 지우기 모드 활성화
  maskGraphics.circle(mouseX, mouseY, 50); // 마우스 위치에 원형 지우기
  maskGraphics.noErase(); // 지우기 모드 비활성화
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

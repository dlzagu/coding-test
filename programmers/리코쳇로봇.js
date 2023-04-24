function solution(board) {
  board = board.map((a) => a.split("")); // 2차원 배열로 변환
  let answer = -1; // 결과값 초기화
  let start = [0, 0]; // 시작 위치 초기화
  let col = board.length; // 보드의 세로 길이
  let row = board[0].length; // 보드의 가로 길이

  let dx = [0, 1, 0, -1]; // 상하좌우
  let dy = [1, 0, -1, 0];

  board.map((a, i) =>
    a.map((b, j) => {
      if (board[i][j] == "R") start = [i, j]; // 시작 위치 설정
    })
  );

  let queue = []; // BFS를 위한 큐
  let visited = []; // 방문 처리 배열
  for (let i = 0; i < col; i++) visited.push(new Array(row).fill(false)); // visited 배열 초기화
  queue.push([start, 0]); // 시작 위치와 이동횟수를 큐에 삽입

  while (queue.length != 0) {
    // 큐가 빌 때까지 반복
    let [[x, y], cnt] = queue.shift(); // 큐에서 위치와 거리를 추출
    visited[x][y] = true; // 방문 처리
    if (board[x][y] == "G") {
      // 목적지에 도착한 경우
      answer = cnt; // 결과값 갱신
      break; // 반복문 종료
    }
    for (let i = 0; i < 4; i++) {
      // 4방향으로 이동
      let nx = x + dx[i];
      let ny = y + dy[i];

      while (
        nx >= 0 &&
        nx < col &&
        ny >= 0 &&
        ny < row &&
        board[nx][ny] != "D"
      ) {
        // 미끄러지기 실행
        nx += dx[i];
        ny += dy[i];
      }
      nx -= dx[i];
      ny -= dy[i];
      if (!visited[nx][ny]) {
        // 방문하지 않은 경우
        queue.push([[nx, ny], cnt + 1]); // 큐에 삽입
      }
    }
  }

  return answer; // 결과값 반환
}

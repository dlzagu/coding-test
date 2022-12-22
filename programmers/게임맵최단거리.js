function solution(maps) {
  const col = maps[0].length - 1;
  const row = maps.length - 1;
  const queue = [[0, 0, 1]];
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  while (queue.length) {
    const [xx, yy, moveCnt] = queue.shift();
    if (xx === col && yy === row) return moveCnt;
    for (dir of direction) {
      const newX = xx + dir[0];
      const newY = yy + dir[1];

      if (
        newX <= col &&
        newY <= row &&
        newX >= 0 &&
        newY >= 0 &&
        maps[newY][newX] === 1
      ) {
        maps[newY][newX] = 0; // 지나간 자리 0으로 바꿔주기
        queue.push([newX, newY, moveCnt + 1]);
      }
    }
  }
  return -1;
}

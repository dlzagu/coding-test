function solution(maps) {
  let start = [0, 0];
  let end = [0, 0];
  let lever = [0, 0];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        start = [j, i];
      }
      if (maps[i][j] === "L") {
        lever = [j, i];
      }
      if (maps[i][j] === "E") {
        end = [j, i];
      }
    }
  }
  const first = bfs(start, lever, maps);
  const second = bfs(lever, end, maps);

  return first + second < 0 ? -1 : first + second;
}

function bfs(start, end, maps) {
  const col = maps[0].length - 1;
  const row = maps.length - 1;
  const queue = [[...start, 0]];
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );

  while (queue.length) {
    let [xx, yy, moveCnt] = queue.shift();
    if (visited[yy][xx]) continue;
    visited[yy][xx] = true;

    if (xx === end[0] && yy === end[1]) return moveCnt;

    for (dir of direction) {
      const newX = xx + dir[0];
      const newY = yy + dir[1];
      if (newX > col || newY > row || newX < 0 || newY < 0) continue;
      if (maps[newY][newX] === "X") continue;
      queue.push([newX, newY, moveCnt + 1]);
    }
  }

  return -10000;
}

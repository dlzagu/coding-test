function solution(maps) {
  const col = maps[0].length;
  const row = maps.length;
  const answer = [];
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );
  const check = (i, j) => {
    visited[i][j] = true;
    let cnt = Number(maps[i][j]);
    for (let dir of direction) {
      const xx = dir[1] + j;
      const yy = dir[0] + i;

      if (
        xx >= 0 &&
        yy >= 0 &&
        xx < col &&
        yy < row &&
        maps[yy][xx] !== "X" &&
        !visited[yy][xx]
      ) {
        cnt += check(yy, xx);
      }
    }
    return cnt;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        answer.push(check(i, j));
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function solution(maps) {
  maps = maps.map((a) => a.split("")).map((a) => a.map(Number));
  const col = maps[0].length;
  const row = maps.length;
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const visited = Array(row).fill(Array(col).fill(0));
  const check = (i, j) => {
    visited[i][j] = 1;
    let cnt = maps[i][j];
    for (let dir of direction) {
      const xx = dir[1] + j;
      const yy = dir[0] + i;
      if (
        xx >= 0 &&
        yy >= 0 &&
        xx < col &&
        yy < row &&
        maps[yy][xx] &&
        !visited[yy][xx]
      ) {
        console.log(maps[yy][xx]);
        cnt += check(yy, xx);
      }
    }
    return cnt;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] && !visited[i][j]) {
        console.log(check(i, j));
      }
    }
  }

  return;
}

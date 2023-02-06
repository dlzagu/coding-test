function solution(land, height) {
  var answer = 0;
  const col = land[0].length;
  const row = land.length;
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const visited = Array.from(Array(land.length), () =>
    Array(land[0].length).fill(false)
  );

  const dfs = (x, y) => {
    visited[y][x] = true;

    for (let dir of direction) {
      const xx = dir[1] + x;
      const yy = dir[0] + y;

      if (
        xx >= 0 &&
        yy >= 0 &&
        xx < col &&
        yy < row &&
        !visited[yy][xx] &&
        Math.abs(land[y][x] - land[yy][xx]) <= height
      ) {
        dfs(xx, yy);
      }
    }
  };

  const check = (visited) => {
    let min = 10000;
    for (let i = 0; i < visited.length; i++) {
      for (let j = 0; j < visited[0].length; j++) {
        if (visited[i][j]) {
          for (let dir of direction) {
            const xx = dir[1] + j;
            const yy = dir[0] + i;

            if (
              xx >= 0 &&
              yy >= 0 &&
              xx < col &&
              yy < row &&
              !visited[yy][xx]
            ) {
              const gap = Math.abs(land[i][j] - land[yy][xx]);
              gap < min ? (min = gap) : null;
            }
          }
        }
      }
    }

    return min;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      console.log(i, j);
      if (!visited[i][j]) {
        dfs(j, i);
        const gap = check(visited);
        gap !== 10000 ? (answer += gap) : null;
      }
    }
  }

  return answer;
}

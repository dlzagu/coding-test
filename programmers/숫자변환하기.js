function solution(x, y, n) {
  const dist = Array(1000001).fill(0);
  const bfs = (x, y, n) => {
    const q = [];
    dist[x] = 1;
    q.push(x);
    while (q.length) {
      x = q.shift();
      if (0 <= x + n <= 1000000 && dist[x + n] === 0) {
        dist[x + n] = dist[x] + 1;
        q.push(x + n);
      }
      if (0 <= x * 2 <= 1000000 && dist[x * 2] === 0) {
        dist[x * 2] = dist[x] + 1;
        q.push(x * 2);
      }

      if (0 <= x * 3 <= 1000000 && dist[x * 3] === 0) {
        dist[x * 3] = dist[x] + 1;
        q.push(x * 3);
      }
    }
  };
  bfs(x, y, n);
  return dist[y] - 1;
}

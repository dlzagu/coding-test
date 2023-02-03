function solution(N, road, K) {
  const times = Array(N + 1).fill(Infinity);
  const list = Array.from({ length: N + 1 }, () => []);
  road.forEach(([a, b, c]) => {
    list[a].push({ to: b, time: c });
    list[b].push({ to: a, time: c });
  });

  const stack = [{ to: 1, time: 0 }];
  times[1] = 0;

  while (stack.length) {
    let { to, time } = stack.pop();

    list[to].forEach((next) => {
      const addTime = times[to] + next.time;
      if (times[next.to] > addTime) {
        times[next.to] = addTime;
        stack.push(next);
      }
    });
  }

  return times.filter((time) => time <= K).length;
}

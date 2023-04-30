function pos(k, tasks) {
  let done_cnt = 0;
  const q = []; // 종료일 빠른게 탑으로 우선순위 줌

  let idx = 0;
  for (let day = 0; day < 365; ++day) {
    // 새 작업 추가
    while (idx < tasks.length && tasks[idx][0] === day) {
      q.push(tasks[idx]);
      ++idx;
    }

    //하루 치 일하기
    let can = k;
    while (q.length > 0 && can > 0) {
      const task = q.pop();
      if (task[1] < day) return false;

      if (can >= task[2]) {
        can -= task[2];
        ++done_cnt;
      } else {
        task[2] -= can;
        can = 0;
        q.push(task);
      }
    }
  }
  return done_cnt === tasks.length;
}

function solve(tasks) {
  let lo = 0;
  let hi = 2e10;
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (pos(mid, tasks.slice())) hi = mid;
    else lo = mid;
  }
  return lo + 1;
}

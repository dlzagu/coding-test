function solution(keymap, targets) {
  let answer = [];
  const map = {};
  keymap.forEach((a) => {
    for (let i = 0; i < a.length; i++) {
      if (!map[a[i]]) map[a[i]] = i + 1;
      else {
        if (map[a[i]] > i + 1) map[a[i]] = i + 1;
      }
    }
  });

  targets.forEach((a) => {
    let cnt = 0;
    for (let i = 0; i < a.length; i++) {
      if (map[a[i]]) {
        cnt += map[a[i]];
      } else break;
    }
    cnt === 0 ? answer.push(-1) : answer.push(cnt);
  });
  return answer;
}

function solution(n, info) {
  let max = Number.MIN_SAFE_INTEGER;
  let lion = new Array(11).fill(0);
  let answer = [];

  const isSmallScoreArr = (cnts) => {
    for (let i = 10; i >= 0; i--) {
      if (cnts[i] > answer[i]) return true;
      else if (cnts[i] < answer[i]) return false;
    }
  };

  const dfs = (level, count) => {
    if (level === 10) {
      lion[level] = count;
      let lionPoint = 0;
      let apeachPoint = 0;
      lion.forEach((cnt, i) => {
        if (!cnt && !info[i]) return;
        const score = 10 - i;
        if (info[i] >= cnt) apeachPoint += score;
        else lionPoint += score;
      });
      const diff = lionPoint - apeachPoint;

      if (max < diff) {
        max = diff;
        answer = [...lion];
      } else if (max === diff) {
        if (isSmallScoreArr(lion)) answer = [...lion];
      }
    } else {
      if (count === 0 || info[level] + 1 > count) {
        dfs(level + 1, count);
      } else {
        lion[level] = info[level] + 1;
        count -= info[level] + 1;
        dfs(level + 1, count);

        lion[level] = 0;
        count += info[level] + 1;
        dfs(level + 1, count);
      }
    }
  };
  dfs(0, n);
  if (max <= 0) return [-1];
  return answer;
}

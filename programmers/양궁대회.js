function solution(n, info) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = [];

  const isSmallScoreArr = (cnts) => {
    for (let i = 10; i >= 0; i--) {
      if (cnts[i] > answer[i]) return true;
      else if (cnts[i] < answer[i]) return false;
    }
  };

  const dfs = (lionThrowed, index, lionCnts) => {
    const appeachThrowed = info[index]; // 해당 인덱스의 어피치 화살 갯수
    const appeachOverCnt = appeachThrowed + 1; // 어피치보다 많이 던진 수
    const numberOfThrows = n - lionThrowed; // 던질 수 있는 횟수

    if (index === 10 && lionThrowed < n) {
      lionCnts[index] = n - lionThrowed;
      lionThrowed = n;
    }

    if (n === lionThrowed) {
      let apeachScore = 0;
      let lionScore = 0;

      lionCnts.forEach((cnt, i) => {
        const score = 10 - i;

        if (cnt === 0 && info[i] === 0) return;

        if (info[i] >= cnt) apeachScore += score;
        else if (info[i] - cnt < 0) lionScore += score;
      });
      const diff = lionScore - apeachScore;
      if (max < diff) {
        max = diff;
        answer = lionCnts;
      } else if (max === diff) {
        if (isSmallScoreArr(lionCnts)) answer = lionCnts;
      }
      return;
    }

    if (numberOfThrows >= appeachOverCnt) {
      lionCnts[index] = appeachOverCnt;
      dfs(lionThrowed + appeachOverCnt, index + 1, [...lionCnts]);
      lionCnts[index] = 0;
    }
    dfs(lionThrowed, index + 1, [...lionCnts]);
  };

  dfs(0, 0, new Array(11).fill(0));

  if (max <= 0) return [-1];
  return answer;
}

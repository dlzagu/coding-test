function solution(n, info) {
  let answer = new Array(11).fill(0); // 정답 후보 배열
  let answerDiff = Number.MIN_SAFE_INTEGER; // 라이언의 총 점수 - 어피치의 총 점수

  function isSmallScoreArr(scoreArr) {
    for (let i = 10; i >= 0; i--) {
      if (scoreArr[i] > answer[i]) return true;
      else if (scoreArr[i] < answer[i]) return false;
    }
  } // 정답 후보 배열을 구하기 위해 인덱스 마지막을 비교하는 함수

  function dfs(L, idx, ryanInfo) {
    if (idx === 10 && L < n) {
      ryanInfo[10] = n - L;
      L = n;
    } // 판단할 인덱스가 10이면 남은 화살을 모두 소진하면서, L값을 갱신한다.

    if (L === n) {
      let appeachScore = 0;
      let ryanScore = 0;

      ryanInfo.forEach((elem, i) => {
        if (!elem && !info[i]) return;

        const score = 10 - i;
        if (info[i] - elem >= 0) appeachScore += score;
        else if (info[i] - elem < 0) ryanScore += score;
      }); // 라이언, 어피치의 총 점수을 구한다.

      const diff = ryanScore - appeachScore;

      if (answerDiff < diff) {
        answerDiff = diff;
        answer = ryanInfo;
      } else if (answerDiff === diff) {
        if (isSmallScoreArr(ryanInfo)) answer = ryanInfo;
      } // 차이가 더 커졌다면 바로 정답후보배열을 갱신하고, 차이가 같다면 더 작은 점수를 많이 쏜 경우를 정답후보로 갱신한다.
      return;
    }

    const appeachArrowLength = info[idx]; // 인덱스에 현재 어피치가 쏜 화살의 갯수.

    if (n - L >= appeachArrowLength + 1) {
      ryanInfo[idx] = appeachArrowLength + 1;
      dfs(L + appeachArrowLength + 1, idx + 1, [...ryanInfo]);
      ryanInfo[idx] = 0;
    } // 어피치가 화살을 쏜 것 보다 1개 더 많은 화살을 쏴서 점수를 뺏어온다.
    dfs(L, idx + 1, [...ryanInfo]); // 혹은 현재 인덱스의 점수를 포기한다.
  }

  dfs(0, 0, new Array(11).fill(0));

  if (answerDiff <= 0) return [-1]; // 차이가 0 이하라면 어피치의 승리이므로 [-1] 반환
  return answer;
}

function solution(n, stations, w) {
  let answer = 0;
  let start = 1;
  let left = n;

  while (stations.length) {
    const station = stations.shift();
    // 전파가 안닿는 아파트 구하기
    if (station - w > 1) left = station - w;
    else left = 1;
    // 시작아파트에서 전파가 안닿는 아파트의 차를 전파 도달 범위로 나눈다 .
    const diff = left - start;
    answer += Math.ceil(diff / (1 + w * 2));
    // start를 다시 초기화 한다 .
    if (station + w < n) start = station + w + 1;
    else return answer;
  }

  // start가 n보다 작다면 마지막으로 전파가 안닿는 아파트를 구함.
  if (start <= n) {
    const diff = n - start + 1;
    answer += Math.ceil(diff / (1 + w * 2));
  }

  return answer;
}

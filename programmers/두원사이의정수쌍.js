function solution(r1, r2) {
  let answer = 0;

  for (let i = 1; i < r2; i++) {
    // r2보다 작은 범위에서 반복문 실행
    if (i < r1) {
      // i가 r1보다 작으면
      answer += getMaxY(i, r2, "r2") - getMaxY(i, r1, "r1"); // getMaxY 함수를 이용하여 r2와 r1의 최대값을 구하고 뺀 값을 answer에 더함
    } else {
      // i가 r1보다 크거나 같으면
      answer += getMaxY(i, r2, "r2"); // getMaxY 함수를 이용하여 r2의 최대값을 구하고 answer에 더함
    }
  }
  answer *= 4; // 하나의 분면만 계산 한것이므로 answer에 4를 곱함
  answer += (r2 - r1 + 1) * 4; // x==0일때도 더해줌 answer에 (r2 - r1 + 1) * 4를 더함
  return answer; // answer 반환
}

function getMaxY(x, r, kind) {
  const maxY = Math.sqrt(r * r - x * x); // 최대 y값 구하기
  const intY = parseInt(maxY); // 최대 y값의 정수부분 구하기
  if (kind == "r1" && maxY - intY == 0.0) {
    // kind가 "r1"이고 최대 y값의 소수부분이 0이면 경계값이므로 경계값을 마이너스
    return intY - 1;
  } else return intY; // 그 외에는 최대 y값의 정수부분을 반환
}

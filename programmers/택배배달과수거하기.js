function solution(cap, n, deliveries, pickups) {
  let result = 0;

  // 마지막 배송지점에서부터 트럭이 갈 수 있는 최대 거리를 계산하여 배열에 저장
  const endedDeliveries = calculator(n - 1, deliveries, cap);
  // 마지막 픽업지점에서부터 트럭이 갈 수 있는 최대 거리를 계산하여 배열에 저장
  const endedPickups = calculator(n - 1, pickups, cap);

  // 두 배열 중 길이가 더 짧은 배열의 길이를 구함
  let min_len =
    endedDeliveries.length >= endedPickups.length
      ? endedPickups.length
      : endedDeliveries.length;

  // 두 배열에서 같은 인덱스의 값을 비교하여 결과값에 더함
  for (let i = 0; i < min_len; i++) {
    const d_last = endedDeliveries.shift();
    const p_last = endedPickups.shift();
    result += 2 * (p_last > d_last ? p_last + 1 : d_last + 1);
  }

  // 남은 배송지점이 있다면 결과값에 더함
  while (endedDeliveries.length > 0) {
    result += 2 * (endedDeliveries.shift() + 1);
  }

  // 남은 픽업지점이 있다면 결과값에 더함
  while (endedPickups.length > 0) {
    result += 2 * (endedPickups.shift() + 1);
  }

  return result;
}

// 트럭이 갈 수 있는 최대 거리를 계산하는 함수
const calculator = (index, list, cap) => {
  let remain = cap;
  const ended = [];
  while (index > -1) {
    let diff = remain - list[index];

    // 트럭이 처음 출발할 때, 배송지점이 남아있다면 ended 배열에 인덱스를 추가
    if (remain === cap && list[index] > 0) {
      ended.push(index);
    }

    if (diff >= 0) {
      remain -= list[index];
      list[index] = 0;
      index--;
    } else if (diff < 0) {
      list[index] -= remain;
      remain = cap;
    }
  }
  return ended;
};

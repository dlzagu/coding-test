function solution(cap, n, deliveries, pickups) {
  let result = 0;

  const endedDeliveries = calculator(n - 1, deliveries, cap);
  const endedPickups = calculator(n - 1, pickups, cap);

  let min_len =
    endedDeliveries.length >= endedPickups.length
      ? endedPickups.length
      : endedDeliveries.length;

  for (let i = 0; i < min_len; i++) {
    const d_last = endedDeliveries.shift();
    const p_last = endedPickups.shift();
    result += 2 * (p_last > d_last ? p_last + 1 : d_last + 1);
  }

  while (endedDeliveries.length > 0) {
    result += 2 * (endedDeliveries.shift() + 1);
  }

  while (endedPickups.length > 0) {
    result += 2 * (endedPickups.shift() + 1);
  }

  return result;
}

const calculator = (index, list, cap) => {
  let remain = cap;
  const ended = [];
  while (index > -1) {
    let diff = remain - list[index];

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

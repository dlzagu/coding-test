function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let cnt = 0;

  while (bridge.length) {
    bridge.shift();
    cnt++;

    if (truck_weights.length) {
      var sum = bridge.reduce((acc, cur) => acc + cur);

      sum + truck_weights[0] <= weight
        ? bridge.push(truck_weights.shift())
        : bridge.push(0);
    }
  }

  return cnt;
}

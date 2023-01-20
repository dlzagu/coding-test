function solution(weights) {
  let answer = 0;
  const ratios = [3 / 2, 4 / 3, 2, 1];
  weights.sort((a, b) => a - b);
  const map = new Map();
  let result = 0;
  let count;

  while (weights.length) {
    const weight = weights.shift();
    if (map.has(weight)) {
      count = map.get(weight);
      map.set(weight, count - 1);
      result += count - 1;
      continue;
    }
    count = 0;
    for (let i = 0; i < weights.length; i++) {
      const anotherWeight = weights[i];
      if (weight * 2 < anotherWeight) break;

      const ratio = anotherWeight / weight;
      if (ratios.includes(ratio)) answer++;
    }
    map.set(weight, count);
    result += count;
  }

  return answer;
}

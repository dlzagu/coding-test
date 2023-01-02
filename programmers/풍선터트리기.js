function solution(a) {
  let minL = a[0];
  let minR = a[a.length - 1];
  const alive = [];

  for (let i = 1; i < a.length - 1; i++) {
    if (minL > a[i]) {
      alive.push(a[i]);
      minL = a[i];
    }
  }
  for (let i = a.length - 2; i > 0; i--) {
    if (minR > a[i]) {
      alive.push(a[i]);
      minR = a[i];
    }
  }
  // 맨앞과 맨뒤는 항상 살아남을 수 있음
  return [...new Set([...alive])].length + 2;
}

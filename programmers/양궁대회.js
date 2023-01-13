function solution(n, info) {
  const points = info
    .map((a, i) => (a !== 0 ? 10 - i : null))
    .filter((a) => a !== null);
  const cnts = [];
  const apeachCnts = info.filter((cnt) => cnt !== 0);
  const res = [];
  const len = points.length;
  for (let i = 0; i <= n; i++) {
    cnts.push(i);
  }
  let arr = Array(len).fill(0);
  const result = [];

  return;
}

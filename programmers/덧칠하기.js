function solution(n, m, section) {
  let answer = 0;
  let num = 0;
  let left = 0;
  section.forEach((a) => {
    if (a - num <= left) {
      left -= a - num;
      num = a;
    } else {
      num = a;
      left = m - 1;
      answer++;
    }
  });
  return answer;
}

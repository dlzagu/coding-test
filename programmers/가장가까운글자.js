function solution(s) {
  let answer = [];
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      answer.push(i + 1 - map[s[i]]);
      map[s[i]] = i + 1;
    } else {
      map[s[i]] = i + 1;
      answer.push(-1);
    }
  }

  return answer;
}

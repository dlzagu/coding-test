function solution(t, p) {
  var answer = 0;
  const cnt = p.length;
  for (let i = 0; i < t.length; i++) {
    if (t.slice(i, i + cnt) <= p && t.slice(i, i + cnt).length === cnt)
      answer++;
  }
  return answer;
}

function solution(s, skip, index) {
  let answer = "";
  const skipArr = skip.split("");
  const alphabetArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  ).filter((a) => !skipArr.includes(a));

  s.split("").forEach((a) => {
    const stringIdx = alphabetArr.indexOf(a);
    console.log(stringIdx);
    const targetIdx =
      stringIdx + index > alphabetArr.length - 1
        ? (stringIdx + index) % alphabetArr.length
        : stringIdx + index;
    answer += alphabetArr[targetIdx];
  });

  return answer;
}

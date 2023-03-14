function solution(sequence) {
  let answer = 0;

  const sPlus = []; // +로 시작하는 펄스 수열
  const sMinus = []; // -로 시작하는 펄수 수열

  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      sPlus.push(sequence[i]);
      sMinus.push(-sequence[i]);
    } else if (i % 2 === 1) {
      sPlus.push(Math.max(sPlus[i - 1] - sequence[i], -sequence[i]));
      sMinus.push(Math.max(sMinus[i - 1] + sequence[i], sequence[i]));
    } else {
      sPlus.push(Math.max(sPlus[i - 1] + sequence[i], sequence[i]));
      sMinus.push(Math.max(sMinus[i - 1] - sequence[i], -sequence[i]));
    }
    answer = Math.max(answer, sPlus[i], sMinus[i]);
  }

  return answer;
}

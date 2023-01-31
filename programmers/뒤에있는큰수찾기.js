function solution(numbers) {
  const stack = [];
  const answer = new Array(numbers.length).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    answer[stack.pop()] = -1;
  }

  return answer;
}

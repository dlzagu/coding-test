function solution(arr) {
  let answer = [0, 0];
  const len = arr.length / 2;
  const sum = arr
    .map((a) => a.reduce((acc, cur) => acc + cur))
    .reduce((acc, cur) => acc + cur);
  if (sum === arr.length * arr.length) return [0, 1];

  const dfs = (len, arr) => {
    if (arr.length === 2) {
      arr.forEach(([a, b]) => {
        answer[a]++;
        answer[b]++;
      });
      return;
    }

    let firstLi = [[], []];

    while (arr.length) {
      const sf = arr.shift();
      const first = sf.slice(0, len);
      const second = sf.slice(len);

      firstLi[0].push(first);
      firstLi[1].push(second);

      if (firstLi[0].length === len) {
        for (let i = 0; i < firstLi.length; i++) {
          const sum = firstLi[i]
            .map((a) => a.reduce((acc, cur) => acc + cur))
            .reduce((acc, cur) => acc + cur);
          if (sum === 0) answer[0]++;
          else if (sum === len * len) answer[1]++;
          else dfs(len / 2, firstLi[i]);
        }

        firstLi = [[], []];
      }
    }
  };
  dfs(len, arr, [0, 0]);
  return answer;
}

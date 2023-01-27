function solution(orders, course) {
  var answer = [];
  let map = {};
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i].split("");
    dfs(order, map, 0);
  }
  for (let i = 0; i < course.length; i++) {
    const list = [];
    for (let key in map) {
      const stringLen = key.split("").length;
      if (course[i] === stringLen) list.push([key, map[key]]);
    }
    if (!list.length) continue;
    list.sort((a, b) => b[1] - a[1]);
    const max = list[0][1];
    list
      .filter(([_, cnt]) => cnt === max)
      .map(([string, orderCnt]) => {
        if (orderCnt > 1) answer.push(string);
      });
  }
  answer.sort();
  return answer;
}

const dfs = (arr, map, start) => {
  const key = arr.sort().join("");
  if (map[key]) map[key] += 1;
  else map[key] = 1;
  for (let i = start; i < arr.length; i++) {
    const copy = [...arr];
    copy[i] = "";
    dfs(copy, map, i + 1);
  }
};

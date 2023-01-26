const dfs = (infos, score, map, start) => {
  const key = infos.join("");
  if (map[key]) map[key].push(score);
  else map[key] = [score];

  for (let i = start; i < infos.length; i++) {
    let copy = [...infos];
    copy[i] = "-";
    dfs(copy, score, map, i + 1);
  }
};
const binarySearch = (arr, target) => {
  if (!arr) return 0;
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }

  return arr.length - left;
};

function solution(info, query) {
  const map = {};
  for (let i = 0; i < info.length; i++) {
    const infos = info[i].split(" ");
    const score = Number(infos.pop());
    dfs(infos, score, map, 0);
  }
  for (let key in map) map[key].sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < query.length; i++) {
    let queryString = query[i].replace(/ and /g, "").split(" ");
    let queryScore = Number(queryString.pop());
    queryString = queryString.join("");
    let scoreIdx = binarySearch(map[queryString], queryScore);
    result.push(scoreIdx);
  }

  return result;
}

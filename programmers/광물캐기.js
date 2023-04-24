function solution(picks, minerals) {
  let [dia, iron, stone] = picks;
  const n = Math.ceil(minerals.length / 5);
  let pickList = [];
  const pickCost = {
    diaP: { diamond: 1, iron: 1, stone: 1 },
    ironP: { diamond: 5, iron: 1, stone: 1 },
    stoneP: { diamond: 25, iron: 5, stone: 1 },
  };

  while (pickList.length < n) {
    if (dia > 0) {
      pickList.push("diaP");
      dia--;
    } else if (iron > 0) {
      pickList.push("ironP");
      iron--;
    } else if (stone > 0) {
      pickList.push("stoneP");
      stone--;
    } else break;
  }

  let visited = new Array(pickList.length).fill(false);
  let selected = [];
  const len = pickList.length;
  let min = 1e9;

  function dfs(depth) {
    if (depth == len) {
      let sum = 0;
      let copy = [...selected];
      let index = 0;
      while (copy.length) {
        let pick = copy.shift();
        for (let i = index; i < index + 5; i++) {
          if (minerals[i]) {
            sum += pickCost[pick][minerals[i]];
          }
        }
        index += 5;
      }
      min = Math.min(sum, min);
    }

    for (let i = 0; i < len; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(pickList[i]);
      dfs(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
  dfs(0);

  return min;
}

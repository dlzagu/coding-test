function solution(n, wires) {
  var answer = -1;

  for (let i = 0; i < wires.length; i++) {
    const [firstNode, secondNode] = wires[i];
    let first = wires.slice(0, i + 1);
    let second = wires.slice(i + 1);
    const firstGraph = graphGenerator(first);
    const secondGraph = graphGenerator(second);

    console.log(first, second);
  }

  return answer;
}
const graphGenerator = (arr) => {
  let graph = {};
  arr.forEach(([v1, v2]) => {
    if (graph[v1]) {
      graph[v1].push(`${v2}`);
    }
    if (graph[v2]) {
      graph[v2].push(`${v1}`);
    }
    if (!graph[v1]) {
      graph[v1] = [`${v2}`];
    }
    if (!graph[v2]) {
      graph[v2] = [`${v1}`];
    }
  });
  return graph;
};

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

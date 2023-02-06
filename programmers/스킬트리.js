function solution(skill, skill_trees) {
  var answer = 0;
  const orders = {};
  for (let i = 0; i < skill.length; i++) {
    orders[skill[i]] = i;
  }
  while (skill_trees.length) {
    const skillString = skill_trees.shift();
    answer += check(skillString, orders);
  }
  return answer;
}
const check = (string, orders) => {
  const visited = [];
  for (let i = 0; i < string.length; i++) {
    const order = orders[string[i]];
    if (order !== undefined) {
      for (let j = 0; j < order; j++) {
        if (!visited.includes(j)) return 0;
      }
      visited.push(order);
    }
  }
  return 1;
};

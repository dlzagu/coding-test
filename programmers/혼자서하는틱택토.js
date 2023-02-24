function solution(board) {
  var answer = -1;
  const bingo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const oLoc = [];
  const xLoc = [];
  let oCnt = 0;
  let xCnt = 0;

  board.forEach((a, i) => {
    for (let j = 0; j < a.length; j++) {
      if (a[j] === "O") oLoc.push(i * 3 + j + 1);
      if (a[j] === "X") xLoc.push(i * 3 + j + 1);
    }
  });

  bingo.forEach((a) => {
    let oBingo = a.filter((num) => oLoc.includes(num));
    let xBingo = a.filter((num) => xLoc.includes(num));
    oBingo.length === 3 ? oCnt++ : null;
    xBingo.length === 3 ? xCnt++ : null;
  });

  if (oCnt) {
    if (xLoc.length === oLoc.length - 1 && xCnt === 0) return 1;
    else return 0;
  } else if (xCnt) {
    if (oLoc.length === xLoc.length && oCnt === 0) return 1;
    else return 0;
  } else {
    if (oLoc.length === xLoc.length || xLoc.length === oLoc.length - 1)
      return 1;
    else return 0;
  }

  return answer;
}

// o가 빙고일 땐 x가 하나 작아야하고 x가 빙고이면 안됨

// x가 빙고일 땐 o가 빙고이면 안되고 o개수랑 같아야함

// 그 외 에는 o가 x랑 같거나  o가 한개 더 많아야 함

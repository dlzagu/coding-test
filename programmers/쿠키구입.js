function solution(cookie) {
  let max = 0;

  for (let i = 0; i < cookie.length; i++) {
    let left = i;
    let right = i + 1;
    let lSum = cookie[left];
    let rSum = cookie[right];

    while (1) {
      if (lSum === rSum && max < lSum) {
        max = lSum;
      } else if (lSum >= rSum && right !== cookie.length - 1) {
        rSum += cookie[++right];
      } else if (lSum <= rSum && left !== 0) {
        lSum += cookie[--left];
      } else break;
    }
  }
  return max;
}

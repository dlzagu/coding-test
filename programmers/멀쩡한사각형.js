function solution(w, h) {
  const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
  if (w === h) return w * h - w;
  return w * h - (w + h - gcd(w, h));
}

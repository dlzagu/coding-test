function solution(today, terms, privacies) {
  let answer = [];
  const [year, month, day] = today.split(".").map(Number);
  const termsMap = {};
  terms.map((a) => a.split(" ")).map(([a, b]) => (termsMap[a] = Number(b)));

  for (let i = 0; i < privacies.length; i++) {
    const [yymmdd, type] = privacies[i].split(" ");
    const [colletYY, colletMM, colletDD] = yymmdd.split(".").map(Number);
    let date = new Date(colletYY, colletMM - 1, colletDD - 1);
    date.setMonth(date.getMonth() + termsMap[type]);
    let [mm, dd, yy, time] = date.toLocaleString().split(",")[0].split("/");
    dd > 28 ? (dd = 28) : null;

    if (!(new Date(`${year}-${month}-${day}`) <= new Date(`${yy}-${mm}-${dd}`)))
      answer.push(i + 1);
  }

  return answer;
}

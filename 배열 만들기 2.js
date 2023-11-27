// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    let cnt = 0;
    const stringIndex = String(i);
    for (let j = 0; j < stringIndex.length; j++) {
      if (stringIndex[j] == 5 || stringIndex[j] == 0) {
        cnt++;
        if (stringIndex.length === cnt) {
          answer.push(i);
        }
      }
    }
  }

  if (answer.length === 0) {
    return [-1];
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181851?language=javascript

function solution(rank, attendance) {
  let answer = 0;
  let attendance_rank = [];
  rank.forEach((rank, index) => {
    if (attendance[index] === true) {
      attendance_rank.push({ rank, index });
    }
  });

  attendance_rank.sort((a, b) => a.rank - b.rank);

  answer =
    10000 * attendance_rank[0].index +
    100 * attendance_rank[1].index +
    attendance_rank[2].index;

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code) {
  let answer = "";
  let mode = 0;

  const code_arr = [...code];

  code_arr.forEach((code, index) => {
    if (mode === 0) {
      if (code === "1") {
        mode = 1;
      } else if (index % 2 === 0) {
        answer += code;
      }
    } else if (mode === 1) {
      if (code === "1") {
        mode = 0;
      } else if (index % 2 === 1) {
        answer += code;
      }
    }
  });

  if (!answer) {
    return "EMPTY";
  }

  return answer;
}

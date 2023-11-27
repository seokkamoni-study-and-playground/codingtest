// https://school.programmers.co.kr/learn/courses/30/lessons/81301#

const number_word_arr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  let answer = "";
  const s_arr = [...s];

  let word = "";
  s_arr.forEach((item, index) => {
    const isNumber = isNaN(item) === false;

    if (isNumber) {
      answer += item;
    } else {
      word += item;
    }

    if (number_word_arr.includes(word)) {
      const number = number_word_arr.indexOf(word);
      answer += number;
      word = "";
    }
  });

  return Number(answer);
}

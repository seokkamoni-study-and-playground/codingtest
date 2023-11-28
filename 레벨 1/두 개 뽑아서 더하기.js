// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      if (numbers[i] != null && numbers[j] != null) {
        const sum = numbers[i] + numbers[j];
        if (!answer.includes(sum)) {
          answer.push(sum);
        }
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

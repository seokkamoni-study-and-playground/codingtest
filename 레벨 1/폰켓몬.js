// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const numLengthHalf = nums.length / 2;

  let poketmon_arr = [];
  let poketmon_option_count = 0;
  nums.forEach((num) => {
    if (!poketmon_arr.includes(num)) {
      poketmon_option_count++;
    }
    poketmon_arr.push(num);
  });

  if (numLengthHalf <= poketmon_option_count) {
    return numLengthHalf;
  }

  return poketmon_option_count;
}

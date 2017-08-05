function add() {
  // 实现该函数
  const args = [].slice.call(arguments, 0)
  if (args.length === 0) {
    return undefined;
  } else if (args.length === 1) {
    return args[0]
  }
  const result = []
  const num1 = args.shift().split('').reverse();
  const num2 = args.shift().split('').reverse();
  let indent = 0
  let ln = Math.max(num1.length, num2.length);
  for(let i = 0; i < ln; i++) {
    let sum = indent + (+num1[i] || 0) + (+num2[i] || 0)
    if (sum > 9) {
      sum = sum - 10;
      indent = 1
    } else {
      indent = 0
    }
    result.push(sum);
  }
  if (indent > 0) {
    result.push(indent)
  }
  if (args.length > 0) {
    args.unshift(result.reverse().join(''))
    return add.apply(null, args)
  }
  console.log(result.reverse().join(''))
  return result.join('')
}

module.exports = add
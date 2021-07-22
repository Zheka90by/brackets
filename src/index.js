module.exports =
  function check(str, bracketsConfig) {
    const arr = bracketsConfig.map(el => el.join(''))
    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) {
        str = str.replace(arr[i], '')
        i = -1
      }
    }
    return str.length === 0
  }



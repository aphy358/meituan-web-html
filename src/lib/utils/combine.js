/**
* Created by cycold on 2016-11-09
* Modified from http://stackoverflow.com/questions/14663145/how-to-get-all-the-combination-from-a-group-of-arrays
*/

export default function combine() {
  if (Array.isArray(arguments[0])) {
    return processArrays(arguments[0], [], [])
  } else {
    return processArrays([].slice.call(arguments), [], [])
  }
  function processArrays(arrays, arr, res) {
    for (let i = 0; i < arrays[0].length; i++) {
      let a = arrays[0][i]
      if (arrays.length > 1) {
        processArrays(arrays.slice(1), arr.concat(a), res)
      } else {
        res.push(arr.concat(a))
      }
    }
    return res
  }
}

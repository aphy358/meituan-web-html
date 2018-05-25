
/**
 * 返回一个在特定范围的随机数 这个随机数为整数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export default function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

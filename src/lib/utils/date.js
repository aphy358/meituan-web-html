/**
 * Created by cycold@qq.com on 2017-04-01.
 */

/**
* 时间格式处理 dateFormat(new Date(1490147895116), "yyyy-MM-dd HH:mm:ss")
* @param fmt
* @returns {*}
* @constructor
*/
export const dateFormat = (date, fmt = "yyyy-MM-dd") => {
  if (!date) return console.error("Invalid Date...")
  date = typeof date == "object" ? date : new Date(Number(date));
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //24小时
    "h+": date.getHours() > 12 ? date.getHours() - 12 : date.getHours(), //12小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }

  return fmt
}

/**
* 简单时间格式解析
* @param  {string} fmt: yyyy-MM-dd 2017-03-17
* @return {object} new Date(yyyy, MM - 1, dd)
*/
export const dateParse = (fmt) => {
  if (fmt.indexOf('-') > -1) {
    let _arr = fmt.split('-')
    return new Date(_arr[0], parseInt(_arr[1]) - 1, _arr[2])
  }
  return new Date()
}



function adjustedDate(y, m, d, h, i, s, u) {
  let date = new Date(y, m, d, h || 0, i || 0, s || 0, u || 0);

  if (date.getHours() == 23 && (h || 0) === 0) {
    date.setHours(date.getHours() + 2);
  }

  return date;
}

// 获取年
export const getYear = (d) => d.getFullYear()

// 获取月份(月份是从0开始 0 - 11 )
export const getMonth = (d) => d.getMonth()

// 获取日
export const getDay = (d) => d.getDate()

export const getDate = adjustedDate

// 获取一个月中的最大天数
export const getMaxDayOfMonth = (y, m) => {
  return 32 - new Date(y, m, 32, 12).getDate()
}

// 获取第几周
export const getWeekNumber = (d) => {
  // Copy date so don't modify original
  d = new Date(d);
  d.setHours(0, 0, 0);
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  // Get first day of year
  var yearStart = new Date(d.getFullYear(), 0, 1);
  // Calculate full weeks to nearest Thursday
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

export const getPrevMonth = (d) => {
  // 当前月 1月份
  if (d.getMonth() == 0) {
    return 11
  } else {
    return d.getMonth() - 1
  }
}

export const getNextMonth = (d) => {
  // 当前月 12
  if (d.getMonth() == 11) {
    return 0
  } else {
    return d.getMonth() + 1
  }
}

// 获取一个月星期的数据
export const getArrayWeeks = (d) => {
  let curY = d.getFullYear()
  let curM = d.getMonth()
  let daysOfMonth = getMaxDayOfMonth(curY, curM)
  let prevM
  let nextM
  let daysOfPrevMonth
  let weeks = []
  let days = []

  for (let i = 1; i <= daysOfMonth; i++) {
    let d = adjustedDate(curY, curM, i)
    let wd = d.getDay()

    if (wd == 0) {
      days.push(d)
      weeks.push(days)
      days = []
    } else {
      days.push(d)
    }

    // 保存最后一周数据
    if (i == daysOfMonth && wd !=0 ) {
      weeks.push(days)
    }
  }

  /**
   * 显示非本月(上个月,下个月)的日期
  */
  let firstWeekDays = weeks[0]
  let trailWeekDays = weeks[weeks.length - 1]
  let fl = firstWeekDays.length
  let tl = trailWeekDays.length

  // 需要处理跨年问题
  if (curM == 0) {
    prevM = 11
    curY = curY - 1
  } else {
    prevM = curM - 1
  }

  if (curM == 11) {
    nextM = 0
    curY = curY + 1
  } else {
    nextM = curM + 1
  }

  daysOfPrevMonth = getMaxDayOfMonth(curY, prevM)

  for (let j = 0; j < 7 - fl; j++) {
    let d = adjustedDate(curY, prevM, daysOfPrevMonth - j)
    firstWeekDays.unshift(d)
  }

  let j
  for (j = 1; j <= 7- tl; j++) {
    let d = adjustedDate(curY, nextM, j)
    trailWeekDays.push(d)
  }

  // 再追加一个星期
  days = []
  for (let w = 0; w < 7; w++) {
    let d = adjustedDate(curY, nextM, j++)
    days.push(d)
  }
  weeks.push(days)
  days = null
  return weeks;
}
//把秒 转成时间格式
export const formatPlayTimeStr = (pt)=>{
	if(!pt){  pt = 0; }
	let h = Math.floor(pt/60/60);
	let m = Math.floor((pt - h*60*60)/60);
	let s = pt%60;
	let d = Math.floor(h/24);
			h = h%24;
	return (d>0? d+'天 ':'')+(h<10? '0'+h:h)+':'+(m<10? '0'+m:m)+':'+(s<10? '0'+s:s);
}
export default {
  dateFormat: dateFormat,
  dateParse: dateParse,
  formatPlayTimeStr:formatPlayTimeStr,
}


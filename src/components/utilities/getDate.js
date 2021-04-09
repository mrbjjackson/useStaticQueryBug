import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'


export default function getDatesAndTimes(dateTime) {
  const date = {}
  dayjs.extend(advancedFormat)
  
  date.dateTime = new Date(dateTime)
  date.day = new Intl.DateTimeFormat('en-GB', {weekday:'long'}).format(date.dateTime)
  date.date = date.dateTime.getDate()
  date.month = new Intl.DateTimeFormat('en-GB', {month:'long'}).format(date.dateTime)
  date.monthNumber = date.dateTime.getMonth()
  date.year = date.dateTime.getFullYear()
  date.displayDateLong = dayjs(date.dateTime).format('dddd Do MMMM')
  date.displayDateShort = dayjs(date.dateTime).format('ddd D MMM')
  date.displayTime = dayjs(date.dateTime).format('H:ma')
  
  return date
}
// to add more: https://day.js.org/docs/en/display/format
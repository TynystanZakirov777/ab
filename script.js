const data = document.getElementById("data");
const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");

const today = new Date()

const weekDays= ["Понедельник","Вторник","Среда","Четверг","Пятница","Суботта","Воскрисение"]
const allMonth= ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Нобрь","Декабрь",]
data.innerHTML=today.getDate()
day.innerHTML=today.weekDays[getDay()-1]
month.innerHTML=today.getMonth()
year.innerHTML=today.getFullYear()

console.log(weekDays[0]);

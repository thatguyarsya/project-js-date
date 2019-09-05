var d = new Date ()


console.log(new Date('2020-09-11T00:00'))
console.log(new Date (88374387634886))
console.log(new Date())
console.log(d.getFullYear())
console.log(d.getHours())
console.log(d.getMilliseconds())
console.log(d.getUTCMilliseconds())

function startTime() {
    var d = new Date ()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    var ms = d.getMilliseconds()
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + "." + ms;
    var t = setTimeout(startTime, 1);
}
function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}
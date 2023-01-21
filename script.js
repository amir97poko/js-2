var num = +prompt('ведите ваш возраст')
// alert('Вы еще молоды, вам нужно учится')



// switch (num) {
//     case num > 0 && num <= 18:
//         alert('Вы еще молоды, вам нужно учится')
//         break;
// }



// var nam = +prompt('ведите ваш возраст')
// alert(nam = 'вам нужно работать')




if (num > 0 && num <= 17) {
    alert('Вы еще молоды, вам нужно учится')
    console.log('Вы еще молоды, вам нужно учится');
} else if (num >= 18 && num <= 49) {
    alert('вам нужно работать')
    console.log('вам нужно работать');
} else if (num >= 50 && num <= 59) {
    alert('вам скоро на пенсию')
    console.log('вам скоро на пенсию');
} else if (num >= 60 && num <= 100) {
    alert('вы пенсионер')
    console.log('вы пенсионер');
} else {
    alert('что-то пошло не так')
    console.log('что-то пошло не так');
}
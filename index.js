
// /////  1  /////////

// const name = 'Влад, Артём, Никита, Дима, Таня, Артём'

// function countOccurrences(text, searchText) {
//    text.match(new RegExp(searchText, 'g') || []).lenght
// }
// console.log(countOccurrences('Влад, Артём, Никита, Дима, Таня, Артём', 'Артём'))


////////  2  ///////

// const stringTask1 = 'Меня зовут Артём, тебя зовут Артём тоже'
// function findAllOccurrences(text, searchText) {
//     let occurrences = []
//     let index = text.indexOf(searchText)

//     while (index !== -1) {
//         occurrences.push(index)
//         index = text.indexOf(searchText, index + 1)
//     }
//     return occurrences
// }
// console.log(findAllOccurrences(stringTask1, 'Артём'));



// //////  3 //////

// const stringTask2_1 = '!@#$.'
// const stringTask2_2 = 'Cat!@#$.'
// function checkAllCharactes(str1, str2) {
//     const requiredSymbolLenght = str1.length
//     let counter = 0
//     for (let char of str1) {
//         if (!str2.includes(char)) {
//             console.log('checkAllCharactes', false);
//             return false
//         } else {
//             console.log('checkAllCharactes', true);
//             counter++
//         }
//     }
//     return counter === requiredSymbolLenght
// }
// console.log(checkAllCharactes(stringTask2_1, stringTask2_2));


//// 6 ////

// const badText = ['собака', 'петух', 'козёл']
// const messageIncorrect = 'Эй ты, петух. Я сказал козёл'
// const messageCorrect = 'Эй ты, чел'
// function filterMessage(message) {
//     let filtredMessage = message
//     for (let word of badText) {
//         filtredMessage = filtredMessage.replaceAll(word, '*'.repeat(word.length))
//     }
//     return filtredMessage
// }

// console.log(filterMessage(messageIncorrect));
// console.log(filterMessage(messageCorrect));



// // /////////Domashka//////////////////////////
// document.getElementById('btn').addEventListener('click', function() {
//   const inputText = document.getElementById('input').value;
//   const titleText = titleTextContent(inputText);
//   document.getElementById('title').textContent = titleText;
// });

// function titleTextContent(str) {
//   return str[0].toUpperCase() + str.toLowerCase().slice(1) 
// }




///////  Моя задача //////
// __________________________////


// let sum = function(a, c, b, v) {
//    const result1 = a - c; // 61
//    const result2 = b + v // 55
//    if (result1 < result2) {
//       console.log('Очень мало!')
//    } else if (result1 >= result2 & result1 <= 60) {
//       console.log('Достаточно!')
//    } else {
//       console.log('Очень много!')
//    }
// }

// sum(64, 3, 30, 25)


// let sum = function(a, c, b, v) {
//    const result1 = a - c;
//    const result2 = b + v;
//    const result3 = result1 * result2
//    console.log(result3)
   
// }

// sum(64, 3, 30, 25)









////////// Домашка //////////////

const mainArray = [1, 2, 3, 4, 5];
const filterArray = [3, 4, 5, 6, 7];

function filterArrayByAnother(mainArray, filterArray) {
    let arr = []
    for (let i = 0; i < mainArray.length; i++) {
        if (filterArray.includes(mainArray[i])) arr.push(mainArray[i]);
      }
      return arr
}




console.log(filterArrayByAnother(mainArray, filterArray));
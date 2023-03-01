let wordToChange = "abScD";
let strToCorrect = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
let strToCount = "Текст, в котором слово текст несколько раз встречается и слово тоже";

function getChangeWord(str) {
    if (!str) return str;

    let s = str.toLowerCase();

    return s[0].toUpperCase() + s.slice(1);
}

function getCorrectlyString(str) {
    return str.replace(/(\p{Po})/gu, "$1 ").replace(/\s+/g, ' ').replace(/ +(\p{P})/gu, "$1").trim();
}

function countWords(str) {
    return str.split(" ").length;
}

function countUniqueWords(str) {
    let s = str.toLowerCase().replace(/(\p{P})/gu, '');
    
    let uniqueWordsMap = new Map();

    for (const words of s.split(' ')) {
        if (uniqueWordsMap.has(words)) {
            uniqueWordsMap.set(words, uniqueWordsMap.get(words) + 1);
        } else {
            uniqueWordsMap.set(words, 1);
        }
    }

    return JSON.stringify(Object.fromEntries(uniqueWordsMap));
}

console.log(getChangeWord(wordToChange) + "\n");
console.log(getCorrectlyString(strToCorrect) + "\n");
console.log(countWords(strToCount) + "\n");
console.log(countUniqueWords(strToCount) + "\n");
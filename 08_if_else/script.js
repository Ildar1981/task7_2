let minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
let maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));

let numberMin = isNaN(minValue)
  ? 0
  : parseInt(minValue) && minValue > 999
  ? 999
  : minValue < -999
  ? -999
  : minValue;
let numberMax = isNaN(maxValue)
  ? 100
  : parseInt(maxValue) && maxValue > 999
  ? 999
  : maxValue < -999
  ? -999
  : maxValue;

alert(
  `Загадайте любое целое число от ${numberMin} до ${numberMax}, а я его угадаю`
);
let answerNumber = Math.floor((numberMin + numberMax) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;
const answersPositive = [
  "Возможно это число",
  "Наверное это число",
  "Да это легко! Ты загадал",
  "Твое число",
];

const answersNegative = [
  "Возможно это не число",
  "Наверное это не число",
  "Ты загадал что то другое",
];

document.getElementById("btnRetry").addEventListener("click", function () {
  gameRun = false;
  let minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
  let maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));

  let numberMin = isNaN(minValue)
    ? 0
    : parseInt(minValue) && minValue > 999
    ? 999
    : minValue < -999
    ? -999
    : minValue;
  let numberMax = isNaN(maxValue)
    ? 100
    : parseInt(maxValue) && maxValue > 999
    ? 999
    : maxValue < -999
    ? -999
    : maxValue;
  alert(
    `Загадайте любое целое число от ${numberMin} до ${numberMax}, а я его угадаю`
  );
  let answerNumber = Math.floor((numberMin + numberMax) / 2);
  let orderNumber = 1;
  gameRun = true;

  const orderNumberField = document.getElementById("orderNumberField");
  const answerField = document.getElementById("answerField");

  orderNumberField.innerText = orderNumber;
  answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;
});

const over = document
  .getElementById("btnOver")
  .addEventListener("click", function () {
    if (gameRun) {
      if (numberMin === numberMax) {
        let randomElement2 =
          answersNegative[Math.floor(Math.random() * answersNegative.length)];
        const phraseRandom = Math.round(Math.random());
        const answerPhrase =
          phraseRandom === 1
            ? `${randomElement2}\n\u{1F914}`
            : `Я сдаюсь..\n\u{1F92F}`;

        answerField.innerText = answerPhrase;
        gameRun = false;
      } else {
        numberMin = answerNumber + 1;
        answerNumber = Math.floor((numberMin + numberMax) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        let randomElement =
          answersPositive[Math.floor(Math.random() * answersPositive.length)];
        answerField.innerText = `${randomElement} ${answerNumber}?`;
      }
    }
  });

const less = document
  .getElementById("btnLess")
  .addEventListener("click", function () {
    if (gameRun) {
      if (numberMin === numberMax) {
        let randomElement2 =
          answersNegative[Math.floor(Math.random() * answersNegative.length)];
        const phraseRandom = Math.round(Math.random());
        const answerPhrase =
          phraseRandom === 1
            ? `${randomElement2}\n\u{1F914}`
            : `Я сдаюсь..\n\u{1F92F}`;

        answerField.innerText = answerPhrase;
        gameRun = false;
      } else {
        numberMax = answerNumber - 1;
        answerNumber = Math.floor((numberMin + numberMax) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;

        let randomElement =
          answersPositive[Math.floor(Math.random() * answersPositive.length)];
        answerField.innerText = `${randomElement} ${answerNumber}?`;
      }
    }
  });

document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
    gameRun = false;
  }
});

function numberToText(number) {
  const units = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];

  let result = "";

  if (number < 20) {
    result += units[number];
    return result.trim();
  } else {
    return number;
  }
}

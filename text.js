let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let quest1 = prompt("Введите обязательную статью расходов в этом месяце");
let quest2 = prompt("Во сколько обойдется?");

let appData = {
  budget: money,
  timeData: time,
  expenses: {quest1 : quest2},
  optionalExpenses: "",
  income: "",
  savings: false,
};

alert(money / 30);

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Exercício 1
function createMonthDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const DaysList = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
  let days = dezDaysList[index];
  let dayListItem = document.createElement('li');
  dayListItem.className = 'day'; // para '.className' foi consultado a documentação no MDN (https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
        
    if(days === 24 || days === 25 || days === 31) {
      dayListItem.classList.add('holiday');
    }

    if(days === 4 || days === 11 || days === 18 || days === 25) {
      dayListItem.classList.add('friday');
    }

    dayListItem.innerHTML = days;
    DaysList.appendChild(dayListItem);
  };
};
  
createMonthDays();


// Exercício 2
function holidayButton(string){
  const button = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday'; // para '.id' foi consultado a documentação no W3Schools (https://www.w3schools.com/jsref/prop_html_id.asp)
  newButton.innerText = string;
  button.appendChild(newButton);
}

holidayButton('Feriados');


// Exercício 3
const clickHolidayButton = document.getElementById('btn-holiday');
clickHolidayButton.addEventListener('click', function(
  let selectedHoliday = 
  if()
));
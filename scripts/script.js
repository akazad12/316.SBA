// importing file with all the questions witch are a list of objects
import { questions } from "./quiz316.3.js";

//Creates the heading with values to be populated in the future
var menuLinks = [
  {
    text: 'Create New Study Guide', href: '/#',
  },
  { text: 'List of Guides', href: '/#' },
  { text: 'Recent Scores', href: '/#' },

];
//Getting Started - sets the background color from css and gives user instruction in main element
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
// mainEl.innerHTML = '<h1>Type your name to Begin</h1>';
mainEl.classList.add('flex-ctr');

//Creating Menubar
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around')

//Adding MenuButtons
menuLinks.forEach(link => {
  const a = document.createElement('a')
  a.href = link.href
  a.onclick = function () {
    //external links not working, outputs a BOM confirm message
    window.confirm('Feature Coming soon')
  }
  a.textContent = link.text
  topMenuEl.appendChild(a)
});
//Declare the name document fragment for later use
let name;
//Dcocument fragment created to start the program when the user clicks submit
document.getElementById("Name").addEventListener('submit', function (e) {
  e.preventDefault();
  //show the display for the first question only when validated
  displayQuestion(current);
  let userName = e.target.name.value;
  name = document.createDocumentFragment();
  let h1 = document.createElement('h1');
  h1.textContent = userName;
  name.appendChild(h1);
  e.target.style.display = 'none';
})

const questionElement = document.getElementById('questions');

let qs = questions.length;
let current = 0;
let score = 0
//Checks whether an option choice is correct, displays the next question
function answerValidator(e) {
  const parent = e.target.parentElement;
  const value = parent.querySelector('input').value;
  current += 1
//
  if (current <= qs) {
    const ans = parent.answer
    if (e.target.value === ans) {
      parent.style.backgroundColor = 'var(--correct-bg)';
      mainEl.innerHTML = `Correct! ${ans}`;
      score += 1;
      mainEl.style.backgroundColor = 'var(--correct-bg)';
    } else { //Update the background and text for when a choice is wrong
      parent.style.backgroundColor = 'var(--wrong-bg)';
      mainEl.innerHTML = 'Wrong';
      mainEl.style.backgroundColor = 'var(--wrong-bg)';
      // window.alert('incorrect try again')
    }
    setTimeout(() => { //Resource used from w3 schools for waiting to view the result before changing to the next question
      if (current < qs) {
        questionElement.innerHTML = ""
        displayQuestion(current)
        mainEl.innerHTML = ""
        mainEl.style.backgroundColor = 'var(--main-bg)';
      }
    }, 1000)

  } if (current == qs) {//Display the final score using the document fragment for the user input and the cached score
    setTimeout(() => {
      let body = document.createElement('h2')

      body.textContent = `${score}/${qs} correct`;
      name.appendChild(body)
      mainEl.innerHTML = "";
      mainEl.appendChild(name)
      mainEl.style.backgroundColor = 'var(--main-bg)';
      questionElement.innerHTML = "";
    }, 1000)
    setTimeout(() => {
      window.alert('Refresh browser to try again')
    }, 2000)
  }

}
function displayQuestion(e) { //Creates the form element that will hold the question buttons and the question text
  const question = questions[e]
  const choices = question['choices']
  const formElement = document.createElement('form');
  const text = document.createElement('h1');
  text.innerText = `${current + 1}. ${question['question']}`;
  formElement.appendChild(text)

  for (const choice of choices) {
    // Create a radio button
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'options'; // Same name groups radio buttons together
    radio.value = choice;
    radio.id = choice;

    // Create a label for the radio button
    const label = document.createElement('label');
    label.htmlFor = choice;
    label.textContent = choice;
    label.classList.add('optionCard')
    radio.classList.add('hide-button')

    radio.addEventListener('click', answerValidator);
    // Append to the page
    formElement.appendChild(radio);
    formElement.appendChild(label);

  }
  formElement.answer = question['answer'];
  questionElement.appendChild(formElement);
}


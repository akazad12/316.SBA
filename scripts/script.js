import { questions } from "./quiz316.3.js";

var menuLinks = [
  {
    text: 'Create New Study Guide', href: '/#',
  },
  { text: 'List of Guides', href: '/#' },
  { text: 'Recent Scores', href: '/#' },

];
//Getting Started
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
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
    window.confirm('Feature Coming soon')
  }
  a.textContent = link.text
  topMenuEl.appendChild(a)
});
let name;


document.getElementById("Name").addEventListener('submit', function (e) {
  e.preventDefault();
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
function answerValidator(e) {
  const parent = e.target.parentElement;
  const value = parent.querySelector('input').value;
  current += 1
  if (current <= qs) {
    const ans = parent.answer
    if (e.target.value === ans) {
      parent.style.backgroundColor = 'var(--correct-bg)';
      mainEl.innerHTML = `Correct! ${ans}`;
      score += 1;
      mainEl.style.backgroundColor = 'var(--correct-bg)';
    } else {
      parent.style.backgroundColor = 'var(--wrong-bg)';
      mainEl.innerHTML = 'Wrong';
      mainEl.style.backgroundColor = 'var(--wrong-bg)';
      // window.alert('incorrect try again')
    }
    setTimeout(() => { //Resource used from w3 schools
      if (current < qs) {
        questionElement.innerHTML = ""
        displayQuestion(current)
        mainEl.style.backgroundColor = 'var(--main-bg)';
      }
    }, 500)
    console.log(score, qs, current)

  } if (current == qs) {
    console.log('hello');
    setTimeout(() => {
      let body = document.createElement('h2')

      body.textContent = `${score}/${qs} correct`;
      name.appendChild(body)
      mainEl.innerHTML = "";
      mainEl.appendChild(name)
      mainEl.style.backgroundColor = 'var(--main-bg)';
      questionElement.innerHTML = "";
    }, 1000)
  }
}
function displayQuestion(e) {
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

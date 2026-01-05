import { questions } from "./quiz316.3.js";
console.log(questions)
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
  a.onclick =function(){
    window.confirm('Feature Coming soon')
  }
  a.textContent = link.text
  topMenuEl.appendChild(a)
});

const questionElement = document.getElementById('questions');
console.log(questionElement)
questionElement.innerText = questions[0]['question']
let choices = questions[0]['choices']
const formElement = document.createElement('form');                     

for (const choice of choices) {
  console.log(choice)
  // Create a radio button
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'options'; // Same name groups radio buttons together
  radio.value = choice;
  radio.id = choice ;

  // Create a label for the radio button
  const label = document.createElement('label');
  label.htmlFor = choice;
  label.textContent = choice;

  // Append to the page
  formElement.appendChild(radio);
  formElement.appendChild(label);
  
}
formElement.answer = questions[0]['answer'];
questionElement.appendChild(formElement);

const radios = document.querySelectorAll('input[type="radio"][name="options"]');
radios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    const parent = radio.parentElement;          
    const value = parent.querySelector('input').value; 

    console.log('clicked value:', value);


    if (e.target.value === questions[0]['answer']) {
      parent.style.backgroundColor = 'var(--correct-bg)';
      mainEl.innerHTML = `Correct! ${questions[0]['answer']}`;
      mainEl.style.backgroundColor = 'var(--correct-bg)';
    } else {
      parent.style.backgroundColor = 'var(--wrong-bg)';
      mainEl.innerHTML = 'Wrong';
      mainEl.style.backgroundColor = 'var(--wrong-bg)';
      window.alert('incorrect try again')
    }
  });
});
